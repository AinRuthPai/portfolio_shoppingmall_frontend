import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItemType } from './types';

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addItem(state: CartItemType[], action: PayloadAction<CartItemType>) {
            const newItem = action.payload;
            const checkItem = state.find((item: CartItemType) => item.id === newItem.id);

            if (!checkItem) {
                state.push(action.payload);
            } else {
                checkItem.count++;
            }
        },

        removeItem(state: CartItemType[], action: PayloadAction<CartItemType>) {
            state.splice(
                state.findIndex((item: CartItemType) => item.id === action.payload.id),
                1
            );
        },

        addCount(state: CartItemType[], action: PayloadAction<number>) {
            state[action.payload].count++;
        },

        removeCount(state: CartItemType[], action: PayloadAction<number>) {
            if (state[action.payload].count > 1) {
                state[action.payload].count--;
            } else {
                state[action.payload].count = 1;
            }
        },
    },
});

export const { addCount, removeCount, addItem, removeItem }: any = cartSlice.actions;

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
    },
});

export default store;
