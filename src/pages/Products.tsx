import React from 'react';
import styled from 'styled-components';
import ProductList from '../components/product/ProductList.tsx';

const Products = () => {
  return (
    <Container>
      <Header>
        <h1>전체 상품</h1>
        <FilterSection>
          <select>
            <option value="">전체</option>
            <option value="의류">의류</option>
            <option value="신발">신발</option>
            <option value="액세서리">액세서리</option>
          </select>
          <select>
            <option value="newest">최신순</option>
            <option value="price-asc">가격 낮은순</option>
            <option value="price-desc">가격 높은순</option>
          </select>
        </FilterSection>
      </Header>
      <ProductList />
    </Container>
  );
};

const Container = styled.div`
  padding: 2rem;
`;

const Header = styled.div`
  max-width: 1200px;
  margin: 0 auto 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  h1 {
    margin: 0;
  }
`;

const FilterSection = styled.div`
  display: flex;
  gap: 1rem;
  
  select {
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
`;

export default Products; 