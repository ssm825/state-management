import { atom, selector } from "recoil";

export const TokenAtom = atom({
  key: "TokenAtom",
  default: undefined,
});

export const isLoginSelector = selector({
  key: "isLoginSelector",
  get: ({ get }) => !!get(TokenAtom),
});

export const logoutSelector = selector({
  key: "logoutSelector",
  get: ({ get }) => get(TokenAtom),
  set: ({ set }) => set(TokenAtom, undefined),
});
