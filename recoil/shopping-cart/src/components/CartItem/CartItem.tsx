import { FC } from "react";
import { useSetRecoilState } from "recoil";
import { Product } from "types/product";
import logoImg from "assets/logo.png";
import styled from "styled-components";
import { cartAtom } from "recoil/CartAtom";

interface CartItemProps {
  data: Product;
}

const CartItem: FC<CartItemProps> = ({ data }) => {
  const { id, title, price, description } = data;

  const setCartItem = useSetRecoilState(cartAtom);
  const deleteCartItem = () => {
    setCartItem((prev) => prev.filter((i) => i.id !== id));
  };

  return (
    <Wrapper>
      <div>
        <ImageWrapper src={logoImg} alt={title}></ImageWrapper>
        <ColumnWrapper>
          <Title>{title}</Title>
          <span>{description}</span>
        </ColumnWrapper>
      </div>
      <RightWrapper>
        <Title>{`${price.toLocaleString()}원`}</Title>
        <Button onClick={deleteCartItem}>삭제</Button>
      </RightWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  padding: 16px;
  width: 100%;
  border: 1px solid var(--line-gray);
`;
const ImageWrapper = styled.img`
  float: left;
  margin-right: 16px;
  width: 60px;
  height: 60px;
  border: 1px solid var(--line-gray);
  border-radius: 8px;
`;
const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 60px;
`;
const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  > span {
    text-align: right;
  }
`;
const Title = styled.span`
  font-weight: var(--bold);
  font-size: 18px;
`;
const Button = styled.button`
  display: block;
  padding: 4px 8px;
  width: fit-content;
`;

export default CartItem;
