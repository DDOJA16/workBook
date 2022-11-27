import { atom } from "recoil";


const initialState = {
  theme: "Pastel",
};

export const recoilThemeState = atom({
  key: "recoilThemeState",
  default: initialState,
});

