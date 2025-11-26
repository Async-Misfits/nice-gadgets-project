import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs/promises';
import * as fssync from 'fs';
import * as path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const BUCKET = process.env.SUPABASE_BUCKET;

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.error('Missing Supabase credentials');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

// Читання JSON
async function readJson(p) {
  const full = path.join(process.cwd(), p);
  return JSON.parse(await fs.readFile(full, 'utf8'));
}

// Завантаження картинки в Storage
async function uploadImage(localPath, supabasePath) {
  if (!fssync.existsSync(localPath)) {
    console.warn('⚠ File not found:', localPath);
    return null;
  }

  const fileBuffer = await fs.readFile(localPath);

  const { error } = await supabase.storage
    .from(BUCKET)
    .upload(supabasePath, fileBuffer, {
      cacheControl: '3600',
      upsert: true,
      contentType: 'image/webp',
    });

  if (error) {
    console.error('❌ upload error:', supabasePath, error);
    return null;
  }

  const { data } = supabase.storage.from(BUCKET).getPublicUrl(supabasePath);
  return data.publicUrl;
}

async function seed() {
  console.log('📥 Reading JSON...');

  const productsJson = await readJson('data/products.json');
  const phones = await readJson('data/phones.json');
  const tablets = await readJson('data/tablets.json');
  const accessories = await readJson('data/accessories.json');

  const details = [...phones, ...tablets, ...accessories];
  const detailIds = new Set(details.map((item) => item.id));

  // === PRODUCT_DETAILS ===
  console.log(`📦 Uploading ${details.length} product_details...`);

  const detailsPayload = [];

  for (const item of details) {
    // Upload image array
    const imageUrls = [];
    for (const img of item.images) {
      const supabasePath = `${item.category}/${item.id}/${path.basename(img)}`;
      const localPath = path.join('public', img);

      const url = await uploadImage(localPath, supabasePath);
      if (url) imageUrls.push(url);
    }

    detailsPayload.push({
      id: item.id,
      category: item.category,
      namespace_id: item.namespaceId,
      name: item.name,
      capacity_available: item.capacityAvailable,
      capacity: item.capacity,
      price_regular: item.priceRegular,
      price_discount: item.priceDiscount,
      colors_available: item.colorsAvailable,
      color: item.color,
      images: imageUrls,
      description: item.description,
      screen: item.screen,
      resolution: item.resolution,
      processor: item.processor,
      ram: item.ram,
      camera: item.camera ?? null,
      zoom: item.zoom ?? null,
      cell: item.cell,
    });
  }

  console.log('📝 Inserting into product_details…');
  {
    const { error } = await supabase
      .from('product_details')
      .upsert(detailsPayload, { onConflict: 'id' });

    if (error) {
      console.error('❌ product_details error:', error);
      process.exit(1);
    }
  }

  // === PRODUCTS ===
  console.log(`📦 Uploading ${productsJson.length} products...`);

  console.log(`📦 Uploading ${productsJson.length} products...`);

  const productsPayload = [];

  for (const p of productsJson) {
    if (!detailIds.has(p.itemId)) {
      console.warn(
        `⚠ Skip product ${p.itemId} — no matching product_details.id`,
      );
      continue;
    }

    const localImg = path.join('public', p.image);
    const supabasePath = `products/${p.itemId}/${path.basename(p.image)}`;

    const imageUrl = await uploadImage(localImg, supabasePath);

    productsPayload.push({
      category: p.category,
      item_id: p.itemId,
      name: p.name,
      full_price: p.fullPrice,
      price: p.price,
      screen: p.screen,
      capacity: p.capacity,
      color: p.color,
      ram: p.ram,
      year: p.year,
      image: imageUrl,
    });
  }

  console.log('📝 Inserting into products...');
  {
    const { error } = await supabase
      .from('products')
      .upsert(productsPayload, { onConflict: 'item_id' });

    if (error) {
      console.error('❌ products error:', error);
      process.exit(1);
    }
  }

  console.log('✅ Seed complete!');
  process.exit(0);
}

seed();
