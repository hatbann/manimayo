import React from 'react';
import styled from 'styled-components';

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
    <Container>
      <h2>장바구니</h2>
      {cartItems.length === 0 ? (
        <EmptyCart>장바구니가 비어있��니다.</EmptyCart>
      ) : (
        <>
          <CartList>
            {cartItems.map((item) => (
              <CartItemContainer key={item.id}>
                <ItemImage src={item.image} alt={item.name} />
                <ItemInfo>
                  <ItemName>{item.name}</ItemName>
                  <ItemPrice>{item.price.toLocaleString()}원</ItemPrice>
                </ItemInfo>
                <QuantityControl>
                  <QuantityButton
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </QuantityButton>
                  <QuantityDisplay>{item.quantity}</QuantityDisplay>
                  <QuantityButton
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </QuantityButton>
                </QuantityControl>
                <ItemTotal>
                  {(item.price * item.quantity).toLocaleString()}원
                </ItemTotal>
                <RemoveButton onClick={() => removeItem(item.id)}>
                  삭제
                </RemoveButton>
              </CartItemContainer>
            ))}
          </CartList>
          <TotalSection>
            <TotalText>총 결제금액:</TotalText>
            <TotalAmount>{totalPrice.toLocaleString()}원</TotalAmount>
          </TotalSection>
          <CheckoutButton>결제하기</CheckoutButton>
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
`;

const EmptyCart = styled.div`
  text-align: center;
  padding: 3rem;
  font-size: 1.1rem;
  color: #666;
`;

const CartList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
`;

const ItemInfo = styled.div`
  flex: 1;
  margin-left: 1rem;
`;

const ItemName = styled.h3`
  margin: 0 0 0.5rem 0;
`;

const ItemPrice = styled.div`
  color: #666;
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 2rem;
`;

const QuantityButton = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid #ddd;
  background: white;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #f5f5f5;
  }
`;

const QuantityDisplay = styled.span`
  min-width: 30px;
  text-align: center;
`;

const ItemTotal = styled.div`
  font-weight: bold;
  margin: 0 2rem;
`;

const RemoveButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  background: #ff4444;
  color: white;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #ff0000;
  }
`;

const TotalSection = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 2rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const TotalText = styled.span`
  font-size: 1.2rem;
  margin-right: 1rem;
`;

const TotalAmount = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: #007bff;
`;

const CheckoutButton = styled.button`
  display: block;
  width: 200px;
  margin: 2rem 0 0 auto;
  padding: 1rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;

export default Cart;
