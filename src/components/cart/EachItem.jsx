import React from "react";

import style from "../../../src/css/eachItem.module.css";

const EachItem = (props) => {
	const {
		noOfItem,
		incNoOfItem,
		decNoOfItem,
		pricePerItem,
		addToCart,
		addedToCart,
		itemImage,
	} = props;

	const { imageStyle } = style;
	return (
		<div className="d-flex flex-column col-6 col-sm-6 col-md-6 col-lg-4 my-4">
			<img src={itemImage} alt="" className={imageStyle} />
			<div className="d-flex justify-content-between">
				<div>
					<button
						onClick={() => decNoOfItem()}
						className="btn btn-primary"
					>
						-
					</button>
					<span>{noOfItem}</span>
					<button
						onClick={() => incNoOfItem()}
						className="btn btn-primary"
					>
						+
					</button>
				</div>
				<span>Price per item: {pricePerItem}</span>
				<button
					onClick={() => addToCart()}
					className={`btn ${
						addedToCart ? "btn-danger" : "btn-primary"
					}`}
				>
					{addedToCart ? "Remove form cart" : "Add to cart"}
				</button>
			</div>
		</div>
	);
};

export default EachItem;
