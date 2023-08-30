import { atom } from "recoil";
import { Product } from "./../types/product";

export const cartAtom = atom<Product[]>({
  key: "cartAtom",
  default: [],
});
