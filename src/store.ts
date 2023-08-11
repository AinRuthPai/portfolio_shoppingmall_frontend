import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem(state: any, action: any) {
      const newItem = action.payload;
      const checkItem = state.find((item: any) => item.id === newItem.id);

      if (!checkItem) {
        state.push(action.payload);
      } else {
        checkItem.count++;
      }
    },

    removeItem(state, action) {
      state.splice(
        state.findIndex((item: any) => item.id === action.payload.id),
        1
      );
    },

    addCount(state: any, action: any) {
      state[action.payload].count++;
    },

    removeCount(state: any, action: any) {
      if (state[action.payload].count > 1) {
        state[action.payload].count--;
      } else {
        state[action.payload].count = 1;
      }
    },
  },
});

const loginSlice = createSlice({
  name: "login",
  initialState: [],
  reducers: {},
});

const priceSlice = createSlice({
  name: "price",
  initialState: [],
  reducers: {
    totalPriceReducer(state: any, action: any) {
      state.push(action.payload);
      console.log(action.payload);
    },
  },
});

const checkSlice = createSlice({
  name: "check",
  initialState: [],
  reducers: {},
});

export const { addCount, removeCount, addItem, removeItem }: any = cartSlice.actions;
export const { login }: any = loginSlice.actions;
export const { totalPriceReducer }: any = priceSlice.actions;

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    login: loginSlice.reducer,
    price: priceSlice.reducer,
    check: checkSlice.reducer,
  },
});

export default store;
