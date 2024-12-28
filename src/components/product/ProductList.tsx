import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard.tsx';
import { Product } from '../../types/product.ts';

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  
  // 임시 데이터 (나중에 API로 대체)
  useEffect(() => {
    setProducts([
      {
        id: 1,
        name: "기본 티셔츠",
        price: 29000,
        description: "편안한 기본 티셔츠",
        image: "https://example.com/tshirt.jpg",
        category: "의류"
      },
      {
        id: 2,
        name: "청바지",
        price: 59000,
        description: "클래식한 청바지",
        image: "https://example.com/jeans.jpg",
        category: "의류"
      },
      // 더 많은 상품 추가 가능
    ]);
  }, []);

  return (
    <Container>
      <GridContainer>
        {products.map(product => (
          <GridItem key={product.id}>
            <ProductCard product={product} />
          </GridItem>
        ))}
      </GridContainer>
    </Container>
  );
};

const Container = styled.div`
  padding: 2rem;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const GridItem = styled.div`
  width: 100%;
`;

export default ProductList; 