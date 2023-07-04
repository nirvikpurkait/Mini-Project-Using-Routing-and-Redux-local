import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	noOfItem: 0,
	addedToCart: false,
	pricePerItem: 10,
	totalPrice: 0,
	itemImage: "src/components/cart/paneer/paneer.jpg",
};

const paneerSlice = createSlice({
	name: "paneer",
	initialState,
	reducers: {
		incNoOfItem: (state) => {
			state.noOfItem += 1;
			state.totalPrice += state.pricePerItem;
		},
		decNoOfItem: (state) => {
			state.noOfItem -= 1;
			state.totalPrice -= state.pricePerItem;
		},
		addToCart: (state) => {
			state.addedToCart = !state.addedToCart;
		},
	},
});

export default paneerSlice.reducer;
export const { incNoOfItem, decNoOfItem, addToCart } = paneerSlice.actions;
