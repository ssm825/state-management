import CartItem from "components/CartItem/CartItem";
import { useRecoilValue } from "recoil";
import { cartAtom } from "recoil/CartAtom";
import styled from "styled-components";

const Cart = () => {
  const cartItem = useRecoilValue(cartAtom);
  return (
    <div>
      {cartItem.length ? (
        cartItem.map((cartData) => <CartItem data={cartData} />)
      ) : (
        <NoItems>장바구니가 비었습니다</NoItems>
      )}
    </div>
  );
};

const NoItems = styled.div`
  margin: 0 auto;
  padding: 8px;
  width: fit-content;
  border-radius: 4px;
  text-align: center;
  border-bottom: 1px solid var(--line-gray);
`;

export default Cart;
