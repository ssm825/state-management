import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";
import { Product } from "./../types/product";

const { persistAtom } = recoilPersist();
export const cartAtom = atom<Product[]>({
  key: "cartAtom",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const totalQuantitySelector = selector({
  key: "totalQuantity",
  get: ({ get }) => {
    const quantity = get(cartAtom);
    return quantity.length;
  },
});

export const totalPriceSelector = selector({
  key: "totalPrice",
  get: ({ get }) => {
    const price = get(cartAtom);
    return price.reduce((acc, cur) => acc + cur.price, 0);
  },
});
