import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Body = () => {
	return (
		<div>
			<div
				style={{
					display: "flex",
					justifyContent: "space-evenly",
					alignItems: "start",
					gap: "60px",
					fontSize: "30px",
				}}
			>
				<NavLink to="/home">Home</NavLink>
				<NavLink to="/cart">Cart</NavLink>
			</div>
			<Outlet />
		</div>
	);
};

export default Body;
