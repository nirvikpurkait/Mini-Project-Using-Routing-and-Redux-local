import React from "react";
import Chapati from "./cart/chapati/Chapati";
import Curd from "./cart/curd/Curd";
import { useSelector } from "react-redux";
import Daal from "./cart/daal/Daal";
import Paneer from "./cart/paneer/Paneer";
import Pickle from "./cart/pickle/Pickle";
import Sweet from "./cart/sweet/Sweet";

const Cart = () => {
	const appState = useSelector((state) => state);

	const handleProceed = () => {
		const noOfItemsInCart = Object.values(appState).filter(
			(elem) => elem.addedToCart
		);
		if (noOfItemsInCart.length < 2) {
			alert("You need to put atleast two items in the cart");
			return;
		}
	};

	const totalCost = () => {
		const itemsToFindPrice = Object.values(appState).filter((elem) => {
			if (elem.addedToCart) return elem;
		});

		const finalPrice = itemsToFindPrice.reduce((acc, curr) => {
			return acc + curr.totalPrice;
		}, 0);

		return finalPrice;
	};

	return (
		<div>
			<div className="d-flex justify-content-evenly align-items-center mt-4">
				<span>Total cart amount: {totalCost()}</span>
				<button onClick={handleProceed} className="btn btn-success">
					Proceed further
				</button>
			</div>
			<div className="row">
				{appState.chapati.addedToCart && <Chapati />}
				{appState.curd.addedToCart && <Curd />}
				{appState.daal.addedToCart && <Daal />}
				{appState.paneer.addedToCart && <Paneer />}
				{appState.pickle.addedToCart && <Pickle />}
				{appState.sweet.addedToCart && <Sweet />}
			</div>
		</div>
	);
};

export default Cart;
