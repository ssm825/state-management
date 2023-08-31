import CartItem from "components/CartItem/CartItem";
import { useRecoilValue } from "recoil";
import {
  cartAtom,
  totalPriceSelector,
  totalQuantitySelector,
} from "recoil/CartAtom";
import styled from "styled-components";

const Cart = () => {
  const cartItem = useRecoilValue(cartAtom);
  const totalQuantity = useRecoilValue(totalQuantitySelector);
  const totalPrice = useRecoilValue(totalPriceSelector);
  return (
    <>
      <ItemWrapper>
        {cartItem.length ? (
          cartItem.map((cartData) => <CartItem data={cartData} />)
        ) : (
          <NoItems>장바구니가 비었습니다</NoItems>
        )}
      </ItemWrapper>
      <TotalInfoWrapper>
        <ColumnWrapper>
          <span>상품 개수</span>
          <Heading>{totalQuantity} 개</Heading>
        </ColumnWrapper>
        <ColumnWrapper>
          <span>최종 결제금액</span>
          <Heading>{totalPrice.toLocaleString()} 원</Heading>
        </ColumnWrapper>
      </TotalInfoWrapper>
    </>
  );
};

const ItemWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 300px);
`;
const TotalInfoWrapper = styled.div`
  padding: 16px;
  width: 100%;
  max-width: 1024px;
  height: 150px;
  border: 1px solid var(--line-gray);
  & span {
    text-align: right;
  }
`;
const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;
const Heading = styled.span`
  font-size: 20px;
  font-weight: var(--bold);
`;
const NoItems = styled.div`
  margin: 0 auto;
  padding: 8px;
  width: fit-content;
  border-radius: 4px;
  text-align: center;
  border-bottom: 1px solid var(--line-gray);
`;

export default Cart;
