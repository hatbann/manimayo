import React from 'react';
import ProductList from '../components/product/ProductList.tsx';
import styles from '../styles/home.module.scss';
import HomeProducts from '../components/product/HomeProducts.tsx';

const Home = () => {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>Welcome to ManiMayo</h1>
      </section>
      <div className={styles.products}>
        <section className={styles.featuredProducts}>
          <h2>인기 상품</h2>
          <HomeProducts />
        </section>
        <section className={styles.newProducts}>
          <h2>새 상품</h2>
          <HomeProducts />
        </section>
      </div>
    </div>
  );
};

export default Home;
