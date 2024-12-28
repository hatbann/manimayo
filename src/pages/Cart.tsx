import React from 'react';
import styled from 'styled-components';
import styles from '../styles/cart.module.scss';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const Cart = () => {
  // 임시 데이터 - 실제로는 상태관리나 API를 통해 데이터를 가져와야 합니다
  const [cartItems, setCartItems] = React.useState<CartItem[]>([
    {
      id: 1,
      name: '상품 1',
      price: 29000,
      quantity: 2,
      image: 'https://via.placeholder.com/100',
    },
    // 더미 데이터 추가 가능
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className={styles.container}>
      <h2>장바구니</h2>
      {cartItems.length === 0 ? (
        <div className={styles.emptyCart}>장바구니가 비어있습니다.</div>
      ) : (
        <>
          <div>
            {cartItems.map((item) => (
              <div className={styles.cartItemContainer} key={item.id}>
                <img
                  className={styles.itemImage}
                  src={item.image}
                  alt={item.name}
                />
                <div className={styles.itemInfo}>
                  <h3 className={styles.itemName}>{item.name}</h3>
                  <span className={styles.itemPrice}>
                    {item.price.toLocaleString()}원
                  </span>
                </div>
                <div className={styles.quantityControl}>
                  <button
                    className={styles.quantityButton}
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span className={styles.quantityDisplay}>
                    {item.quantity}
                  </span>
                  <button
                    className={styles.quantityButton}
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <div className={styles.itemTotal}>
                  {(item.price * item.quantity).toLocaleString()}원
                </div>
                <button
                  className={styles.removeButton}
                  onClick={() => removeItem(item.id)}
                >
                  삭제
                </button>
              </div>
            ))}
          </div>
          <div className={styles.totalSection}>
            <span className={styles.totalText}>총 결제금액:</span>
            <span className={styles.totalAmount}>
              {totalPrice.toLocaleString()}원
            </span>
          </div>
          <button className={styles.checkoutButton}>결제하기</button>
        </>
      )}
    </div>
  );
};

export default Cart;
