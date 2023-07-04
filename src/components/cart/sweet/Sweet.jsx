import React from "react";
import { useSelector, useDispatch } from "react-redux";
import EachItem from "../EachItem";
import { incNoOfItem, decNoOfItem, addToCart } from "./sweetSlice";

const Sweet = () => {
	const sweetState = useSelector((state) => state.sweet);
	const dispatch = useDispatch();

	const incNoOfItemEvent = () => dispatch(incNoOfItem());
	const decNoOfItemEvent = () => dispatch(decNoOfItem());
	const addToCartEvent = () => dispatch(addToCart());

	const { noOfItem, addedToCart, pricePerItem, totalPrice, itemImage } =
		sweetState;

	return (
		<>
			<EachItem
				noOfItem={noOfItem}
				incNoOfItem={incNoOfItemEvent}
				decNoOfItem={decNoOfItemEvent}
				pricePerItem={pricePerItem}
				addToCart={addToCartEvent}
				addedToCart={addedToCart}
				itemImage={itemImage}
			/>
		</>
	);
};

export default Sweet;
