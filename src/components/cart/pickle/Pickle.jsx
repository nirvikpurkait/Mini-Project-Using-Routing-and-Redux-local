import React from "react";
import { useSelector, useDispatch } from "react-redux";
import EachItem from "../EachItem";
import { incNoOfItem, decNoOfItem, addToCart } from "./pickleSlice";

const Pickle = () => {
	const pickleState = useSelector((state) => state.pickle);
	const dispatch = useDispatch();

	const incNoOfItemEvent = () => dispatch(incNoOfItem());
	const decNoOfItemEvent = () => dispatch(decNoOfItem());
	const addToCartEvent = () => dispatch(addToCart());

	const { noOfItem, addedToCart, pricePerItem, totalPrice, itemImage } =
		pickleState;

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

export default Pickle;
