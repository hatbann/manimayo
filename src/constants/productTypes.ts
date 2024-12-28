export const PRODUCT_TYPES = {
  GRIPTOK: 'griptok',
  WALLET: 'wallet',
  KEYRING: 'keyring',
} as const;

export type ProductType = (typeof PRODUCT_TYPES)[keyof typeof PRODUCT_TYPES];
