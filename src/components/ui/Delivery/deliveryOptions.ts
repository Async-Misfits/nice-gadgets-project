export type CityId =
  | 'nyc'
  | 'la'
  | 'chicago'
  | 'houston'
  | 'phoenix'
  | 'philadelphia'
  | 'sandiego'
  | 'dallas';

export interface DeliveryOption {
  id: string;
  type: 'courier' | 'pickup' | 'ups' | 'fedex' | 'usps';
  title: string;
  description: string;
  price: number;
  eta: string;
  isAvailable: boolean;
}

export const CITIES: { id: CityId; name: string }[] = [
  { id: 'nyc', name: 'New York, NY' },
  { id: 'la', name: 'Los Angeles, CA' },
  { id: 'chicago', name: 'Chicago, IL' },
  { id: 'houston', name: 'Houston, TX' },
  { id: 'phoenix', name: 'Phoenix, AZ' },
  { id: 'philadelphia', name: 'Philadelphia, PA' },
  { id: 'sandiego', name: 'San Diego, CA' },
  { id: 'dallas', name: 'Dallas, TX' },
];

export const DELIVERY_BY_CITY: Record<CityId, DeliveryOption[]> = {
  nyc: [
    {
      id: 'nyc-local-courier',
      type: 'courier',
      title: 'Same-Day Local Courier',
      description: 'Door-to-door delivery within New York City.',
      price: 19.99,
      eta: 'Today or tomorrow',
      isAvailable: true,
    },
    {
      id: 'nyc-pickup',
      type: 'pickup',
      title: 'Store Pickup',
      description: 'Pick up your order at our partner pickup point.',
      price: 0,
      eta: 'Ready in 1-2 business days',
      isAvailable: true,
    },
    {
      id: 'nyc-ups-ground',
      type: 'ups',
      title: 'UPS® Ground',
      description: 'Reliable ground shipping to your address.',
      price: 9.99,
      eta: '1-3 business days',
      isAvailable: true,
    },
    {
      id: 'nyc-fedex-express',
      type: 'fedex',
      title: 'FedEx Express Saver®',
      description: 'Faster delivery to your home or office.',
      price: 14.99,
      eta: '1-2 business days',
      isAvailable: true,
    },
  ],

  la: [
    {
      id: 'la-ups-ground',
      type: 'ups',
      title: 'UPS® Ground',
      description: 'Ground shipping within California and nearby states.',
      price: 8.99,
      eta: '1-3 business days',
      isAvailable: true,
    },
    {
      id: 'la-fedex-home',
      type: 'fedex',
      title: 'FedEx Home Delivery®',
      description: 'Evening home delivery for added convenience.',
      price: 12.49,
      eta: '2-4 business days',
      isAvailable: true,
    },
    {
      id: 'la-pickup',
      type: 'pickup',
      title: 'Local Pickup Point',
      description: 'Pick up your order at a nearby pickup location.',
      price: 0,
      eta: 'Ready in 2-3 business days',
      isAvailable: true,
    },
  ],

  chicago: [
    {
      id: 'chicago-ups-ground',
      type: 'ups',
      title: 'UPS® Ground',
      description: 'Standard ground shipping to your address.',
      price: 7.99,
      eta: '1-3 business days',
      isAvailable: true,
    },
    {
      id: 'chicago-usps-priority',
      type: 'usps',
      title: 'USUS Priority Mail®',
      description: 'Delivery to your mailbox or front door.',
      price: 6.49,
      eta: '2-4 business days',
      isAvailable: true,
    },
  ],

  houston: [
    {
      id: 'houston-fedex-ground',
      type: 'fedex',
      title: 'FedEx Ground®',
      description: 'Affordable ground shipping for your order.',
      price: 7.49,
      eta: '2-4 business days',
      isAvailable: true,
    },
    {
      id: 'houston-usps-priority',
      type: 'usps',
      title: 'USPS Priority Mail®',
      description: 'Delivery to your local USPS address.',
      price: 5.99,
      eta: '2-5 business days',
      isAvailable: true,
    },
  ],

  phoenix: [
    {
      id: 'phoenix-ups-ground',
      type: 'ups',
      title: 'UPS® Ground',
      description: 'Reliable ground delivery across Arizona.',
      price: 8.49,
      eta: '1-3 business days',
      isAvailable: true,
    },
    {
      id: 'phoenix-fedex-express',
      type: 'fedex',
      title: 'FedEx Express Saver®',
      description: 'Fast and secure express delivery.',
      price: 13.99,
      eta: '1-2 business days',
      isAvailable: true,
    },
  ],

  philadelphia: [
    {
      id: 'philadelphia-usps-priority',
      type: 'usps',
      title: 'USPS Priority Mail®',
      description: 'Delivery to mailbox or front door.',
      price: 6.25,
      eta: '2-4 business days',
      isAvailable: true,
    },
    {
      id: 'philadelphia-ups-ground',
      type: 'ups',
      title: 'UPS® Ground',
      description: 'Ground delivery across Pennsylvania.',
      price: 8.75,
      eta: '1-3 business days',
      isAvailable: true,
    },
  ],

  sandiego: [
    {
      id: 'sandiego-fedex-home',
      type: 'fedex',
      title: 'FedEx Home Delivery®',
      description: 'Convenient home delivery service.',
      price: 11.99,
      eta: '2-4 business days',
      isAvailable: true,
    },
    {
      id: 'sandiego-ups-ground',
      type: 'ups',
      title: 'UPS® Ground',
      description: 'Cost-effective ground shipping.',
      price: 9.25,
      eta: '1-3 business days',
      isAvailable: true,
    },
  ],

  dallas: [
    {
      id: 'dallas-fedex-ground',
      type: 'fedex',
      title: 'FedEx Ground®',
      description: 'Affordable ground shipping across Texas.',
      price: 7.99,
      eta: '2-4 business days',
      isAvailable: true,
    },
    {
      id: 'dallas-usps-priority',
      type: 'usps',
      title: 'USPS Priority Mail®',
      description: 'USPS delivery to your mail address.',
      price: 6.1,
      eta: '2-5 business days',
      isAvailable: true,
    },
  ],
};
