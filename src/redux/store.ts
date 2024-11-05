import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer&action/reducer";

export const store = configureStore({ reducer });
