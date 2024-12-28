import React from 'react';
import ProductList from '../components/product/ProductList.tsx';

const Home = () => {
  return (
    <div>
      <section className="hero">
        <h1>Welcome to Our Shop</h1>
      </section>
      <section className="featured-products">
        <h2>인기 상품</h2>
        <ProductList />
      </section>
    </div>
  );
};

export default Home; 