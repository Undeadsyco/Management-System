import { atom } from "recoil";

export const employeeListState = atom({
  key: "employeeListState",
  default: [],
});

export const employeeState = atom({
  key: "employeeState",
  default: {},
});