import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { Grid } from '@/components/layout/Grid';
import styles from './ProductPage.module.scss';
import type React from 'react';

export const ProductPageSkeleton: React.FC = () => {
  return (
    <main className={styles.page}>
      <Grid>
        {/* Title */}
        <div className={styles.title}>
          <Skeleton
            height={32}
            width="60%"
          />
        </div>

        {/* Gallery */}
        <div className={styles.gallery}>
          <Skeleton
            height={320}
            width="100%"
            style={{ borderRadius: 16 }}
          />
        </div>

        {/* Controls */}
        <div className={styles.controls}>
          {/* Colors */}
          <div className={styles.block}>
            <Skeleton
              height={16}
              width={120}
              style={{ marginBottom: 12 }}
            />
            <div className={styles.colors}>
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton
                  key={i}
                  circle
                  width={32}
                  height={32}
                />
              ))}
            </div>
          </div>

          {/* Capacity */}
          <div className={styles.block}>
            <Skeleton
              height={16}
              width={140}
              style={{ marginBottom: 12, marginTop: 24 }}
            />
            <div className={styles.capacity}>
              {Array.from({ length: 3 }).map((_, i) => (
                <Skeleton
                  key={i}
                  width={72}
                  height={32}
                />
              ))}
            </div>
          </div>

          {/* Price + buttons */}
          <div
            className={styles.priceWrapper}
            style={{ marginTop: 24 }}
          >
            <Skeleton
              width={96}
              height={32}
            />
            <Skeleton
              width={72}
              height={24}
            />
          </div>

          <div
            className={styles.buttonWrapper}
            style={{ marginTop: 16 }}
          >
            <Skeleton
              width={180}
              height={40}
            />
            <Skeleton
              circle
              width={40}
              height={40}
            />
          </div>

          {/* Small specs */}
          <ul
            className={styles.smallSpecs}
            style={{ marginTop: 16 }}
          >
            {Array.from({ length: 4 }).map((_, i) => (
              <li
                key={i}
                className={styles.specItem}
              >
                <Skeleton
                  width={80}
                  height={16}
                />
                <Skeleton
                  width={120}
                  height={16}
                />
              </li>
            ))}
          </ul>
        </div>

        {/* About */}
        <div className={styles.about}>
          <Skeleton
            width={120}
            height={24}
            style={{ marginBottom: 16 }}
          />
          <div className={styles.aboutBlock}>
            <Skeleton
              count={3}
              height={14}
              style={{ marginBottom: 8 }}
            />
          </div>
        </div>

        {/* Tech specs */}
        <div className={styles.tech}>
          <Skeleton
            width={120}
            height={24}
            style={{ marginBottom: 16 }}
          />
          <ul>
            {Array.from({ length: 6 }).map((_, i) => (
              <li
                key={i}
                className={styles.specItem}
              >
                <Skeleton
                  width={80}
                  height={16}
                />
                <Skeleton
                  width={140}
                  height={16}
                />
              </li>
            ))}
          </ul>
        </div>
      </Grid>
    </main>
  );
};
