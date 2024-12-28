import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext.tsx';
import styles from '../../styles/header.module.scss';

const Header = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.navLeft}>
          <Link className={styles.link} to="/">
            홈
          </Link>
          <Link className={styles.link} to="/product/griptok">
            GripTok
          </Link>
          <Link className={styles.link} to="/product/wallet">
            Wallet
          </Link>
          <Link className={styles.link} to="/product/keyring">
            Keyring
          </Link>
        </div>
        <div className={styles.navRight}>
          {isAuthenticated ? (
            <>
              <Link className={styles.link} to="/cart">
                장바구니
              </Link>
              <Link className={styles.link} to="/mypage">
                마이페이지
              </Link>
              <Link className={styles.link} to="/product/griptok">
                GripTok
              </Link>
              <Link className={styles.link} to="/product/wallet">
                Wallet
              </Link>
              <Link className={styles.link} to="/product/keyring">
                Keyring
              </Link>
              <button className={styles.logoutButton} onClick={logout}>
                로그아웃
              </button>
            </>
          ) : (
            <Link className={styles.link} to="/login">
              로그인
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
