import { FC } from "react";
import { useRecoilState } from "recoil";
import { cartAtom } from "recoil/CartAtom";
import logoImg from "assets/logo.png";
import { Product } from "types/product";
import styled from "styled-components";

interface PrdProps {
  data: Product;
}
const ProductCard: FC<PrdProps> = ({ data }) => {
  const { id, title, price, description } = data;

  const [cartItem, setCartItem] = useRecoilState(cartAtom);
  const isItemInCart = (cartItem?.filter((i) => i.id === id).length || 0) > 0;
  const addToCart = () => {
    !isItemInCart && setCartItem((prev) => [...prev, data]);
  };

  return (
    <Wrapper>
      <img width={276} height={276} src={logoImg} alt={`${id}의 더미이미지`} />
      <Price>{price.toLocaleString()}원</Price>
      <Title>{title}</Title>
      <SubText>{description}</SubText>
      <Button onClick={addToCart} disabled={isItemInCart}>
        {isItemInCart ? "이미 추가된 상품" : "장바구니 담기"}
      </Button>
    </Wrapper>
  );
};

const Price = styled.span`
  font-size: 20px;
  color: var(--font-black);
  font-weight: var(--bold);
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  width: 310px;
  height: 100%;
  border: 1px solid var(--line-gray);
  cursor: pointer;
`;
const Title = styled.span`
  font-size: 18px;
  font-weight: var(--bold);
`;
const SubText = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const Button = styled.button`
  padding: 8px;
  color: var(--pure-white);
  background-color: var(--main);
  &:disabled {
    background-color: var(--line-gray);
    color: var(--font-gray);
  }
`;

export default ProductCard;
