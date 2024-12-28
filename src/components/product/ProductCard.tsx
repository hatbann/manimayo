import React from 'react';
import styled from 'styled-components';
import { Product } from '../../types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card>
      <ImageWrapper>
        <img src={product.image} alt={product.name} />
      </ImageWrapper>
      <Content>
        <h3>{product.name}</h3>
        <p>{product.price.toLocaleString()}원</p>
      </Content>
    </Card>
  );
};

const Card = styled.div`
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
  
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Content = styled.div`
  padding: 1rem;
  
  h3 {
    margin: 0;
    font-size: 1rem;
  }
  
  p {
    margin: 0.5rem 0 0;
    color: #f00;
    font-weight: bold;
  }
`;

export default ProductCard; 