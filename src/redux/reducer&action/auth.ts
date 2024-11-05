import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initialStateType {
  isAuthenticated: boolean;
  user: object | null | string | number;
  loading: boolean;
}

const initialState: initialStateType = {
  isAuthenticated: false,
  user: null,
  loading: false,
};

const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    handleLog(state) {
      console.log(state.isAuthenticated);
      state.isAuthenticated = !state.isAuthenticated;
    },
    login(state) {
      state.isAuthenticated = true;
    },
    handleSearch(state, action: PayloadAction<object | number | string>) {
      state.user = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout, handleSearch, handleLog } = authReducer.actions;
export default authReducer.reducer;
