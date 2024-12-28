import React from 'react';
import { useParams } from 'react-router-dom';
import styles from '../styles/products.module.scss';
import ProductList from '../components/product/ProductList.tsx';
import { PRODUCT_TYPES, ProductType } from '../constants/productTypes.ts';

const Products = () => {
  const { type } = useParams<{ type: ProductType }>();

  const getTitle = () => {
    switch (type) {
      case PRODUCT_TYPES.GRIPTOK:
        return 'GripTok';
      case PRODUCT_TYPES.KEYRING:
        return 'Keyring';
      case PRODUCT_TYPES.WALLET:
        return 'Wallet';
      default:
        return 'GripTok';
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>{getTitle()}</h1>
        <div className={styles.filterSection}>
          <select>
            <option value="newest">최신순</option>
            <option value="best">인기순</option>
            <option value="price-asc">가격 낮은순</option>
            <option value="price-desc">가격 높은순</option>
          </select>
        </div>
      </div>
      <ProductList productType={type} />
    </div>
  );
};

export default Products;
