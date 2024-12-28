import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard.tsx';
import { Product } from '../../types/product.ts';
import styles from '../../styles/components/homeProducts.module.scss';

const HomeProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  // 임시 데이터 (나중에 API로 대체)
  useEffect(() => {
    setProducts([
      {
        id: 1,
        name: '기본 티셔츠',
        price: 29000,
        description: '편안한 기본 티셔츠',
        image: 'https://example.com/tshirt.jpg',
        category: '의류',
      },
      {
        id: 2,
        name: '청바지',
        price: 59000,
        description: '클래식한 청바지',
        image: 'https://example.com/jeans.jpg',
        category: '의류',
      },
      {
        id: 3,
        name: '프리미엄 그립톡',
        price: 15000,
        image: 'https://via.placeholder.com/200',
        type: 'griptok',
      },
      {
        id: 4,
        name: '커스텀 지갑',
        price: 32000,
        image: 'https://via.placeholder.com/200',
        type: 'wallet',
      },
    ]);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.gridContainer}>
        {products.map((product) => (
          <div className={styles.gridItem} key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeProducts;
