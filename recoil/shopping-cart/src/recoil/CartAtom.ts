import { atom, selector } from "recoil";
import { Product } from "./../types/product";

export const cartAtom = atom<Product[]>({
  key: "cartAtom",
  default: [],
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
