# 🛒 [Recoil] Shopping Cart
- Recoil로 장바구니 구현하기
- [유튜브-잡캐헨리](https://youtu.be/k5DLjVmMC2w?si=kdoAbEPsgN7anHox)

![recoil_shopping_cart](https://github.com/ssm825/readmetest/assets/105163878/fb2fbde1-9de2-46fd-8f30-7644527f3cab)

<br/>

## 실행 방법
```bash
$ git clone https://github.com/ssm825/state-management.git
$ cd recoil/shopping-cart
$ npm install
$ npm start
```
  
<br/>

## 기술 스택
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"> <img src="https://img.shields.io/badge/react router-CA4245?style=for-the-badge&logo=reactRouter&logoColor=white"> <img src="https://img.shields.io/badge/Recoil-3578E5?style=for-the-badge&logo=recoil&logoColor=white"> <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styledComponents&logoColor=white">


<br/>

## 장바구니 구현
### Atom
- user가 장바구니 담기 버튼을 클릭하면 cartAtom에 [ { item1 }, { item2 }, { item3 }, … ] 형태로 객체 정보가 입력된다.
```ts
//recoil/CartAtom.ts

export const cartAtom = atom<Product[]>({
  key: "cartAtom",
  default: [],
});
```
- `useRecoilState()`로 cartAtom에 담긴 product를 불러온다.
```ts
const [cartItem, setCartItem] = useRecoilState(cartAtom);
```
- `useRecoilValue()`,` useSetRecoilState()`
```ts
const cartItem = useRecoilValue(cartAtom); // 상태 값 가져오기
const setCartItem = useSetRecoilState(cartAtom); // 상태 값 설정하기
```
<br/>

### Selector
- 장바구니 페이지에서 cartAtom에 있는 정보를 props로 받아 list로 렌더링 된다.
- 장바구니에 담겨진 product 상품 개수와 총 가격을 selector로 보여준다.
```ts
//recoil/CartAtom.ts

// 상품 개수
export const totalQuantitySelector = selector({
  key: "totalQuantity",
  get: ({ get }) => {
    const quantity = get(cartAtom);
    return quantity.length;
  },
});
// 상품의 최종 가격
export const totalPriceSelector = selector({
  key: "totalPrice",
  get: ({ get }) => {
    const price = get(cartAtom);
    return price.reduce((acc, cur) => acc + cur.price, 0);
  },
});
```
```ts
//pages/Cart.tsx

const totalQuantity = useRecoilValue(totalQuantitySelector);
const totalPrice = useRecoilValue(totalPriceSelector);
```

<br/>

### recoil-persist
- 새로고침 시 초기화되지 않고 데이터를 유지 시켜주는 라이브러리
```ts
//recoil/CartAtom.ts

// recoil-persist를 import 해주고 persistAtom 사용을 선언해 준다.
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

export const cartAtom = atom<Product[]>({
  key: "cartAtom",
  default: [],
  // Atom에 effects_UNSTABLE: [persistAtom]를 추가
  effects_UNSTABLE: [persistAtom],
});
```

<br/>

## 프로젝트 구조
```
📦src
 ┣ 📂assets
 ┃ ┗ 📜logo.png
 ┣ 📂components
 ┃ ┣ 📂CartItem
 ┃ ┃ ┗ 📜CartItem.tsx
 ┃ ┣ 📂Layout
 ┃ ┃ ┗ 📜DefaultLayout.tsx
 ┃ ┣ 📂Nav
 ┃ ┃ ┗ 📜Nav.tsx
 ┃ ┗ 📂ProductCard
 ┃ ┃ ┗ 📜ProductCard.tsx
 ┣ 📂model
 ┃ ┗ 📜dummyData.ts
 ┣ 📂pages
 ┃ ┣ 📜Cart.tsx
 ┃ ┗ 📜Main.tsx
 ┣ 📂recoil
 ┃ ┗ 📜CartAtom.ts
 ┣ 📂types
 ┃ ┣ 📜images.d.ts
 ┃ ┗ 📜product.ts
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┗ 📜index.tsx
```
<br/>
