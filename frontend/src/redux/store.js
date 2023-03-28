import authreducer from "./authRed";
import usereducer from "./userData";
import cartreducer from "./cartred";
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: {
    auth: authreducer,
    user: usereducer,
    cart: cartreducer,
  },
});
