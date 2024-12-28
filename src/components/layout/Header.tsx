import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../../contexts/AuthContext.tsx';

const Header = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <HeaderContainer>
      <Nav>
        <NavLeft>
          <StyledLink to="/">홈</StyledLink>
          <StyledLink to="/products">상품</StyledLink>
        </NavLeft>
        <NavRight>
          {isAuthenticated ? (
            <>
              <StyledLink to="/cart">장바구니</StyledLink>
              <StyledLink to="/mypage">마이페이지</StyledLink>
              <LogoutButton onClick={logout}>로그아웃</LogoutButton>
            </>
          ) : (
            <StyledLink to="/login">로그인</StyledLink>
          )}
        </NavRight>
      </Nav>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  padding: 1rem 2rem;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const NavLeft = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavRight = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: 500;

  &:hover {
    color: #007bff;
  }
`;

const LogoutButton = styled.button`
  background: none;
  border: none;
  color: #333;
  font-weight: 500;
  cursor: pointer;
  padding: 0;
  font-size: 1rem;

  &:hover {
    color: #007bff;
  }
`;

export default Header;
