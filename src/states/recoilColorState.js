import { atom } from "recoil";


const initialState = {
  color: "#ABC9FF",
};

export const recoilColorState = atom({
  key: "recoilColorState",
  default: initialState,
});
