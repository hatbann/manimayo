import React from 'react';
import styles from '../../styles/components/productCard.module.scss';
import { Product } from '../../types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={product.image} alt={product.name} />
      </div>
      <div className={styles.content}>
        <h3>{product.name}</h3>
        <p>{product.price.toLocaleString()}원</p>
      </div>
    </div>
  );
};

export default ProductCard;
