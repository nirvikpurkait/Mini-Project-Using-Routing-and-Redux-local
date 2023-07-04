import React from "react";
import Chapati from "./cart/chapati/Chapati";
import Curd from "./cart/curd/Curd";
import Pickle from "./cart/pickle/Pickle";
import Daal from "./cart/daal/Daal";
import Paneer from "./cart/paneer/Paneer";
import Sweet from "./cart/sweet/Sweet";

const Home = () => {
	return (
		<div className="row">
			<Chapati />
			<Pickle />
			<Curd />
			<Daal />
			<Paneer />
			<Sweet />
		</div>
	);
};

export default Home;
