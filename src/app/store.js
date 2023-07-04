import { configureStore } from "@reduxjs/toolkit";
import chapatiReducer from "../components/cart/chapati/chapatiSlice";
import curdReducer from "../components/cart/curd/curdSlice";
import pickleReducer from "../components/cart/pickle/pickleSlice";
import sweetReducer from "../components/cart/sweet/sweetSlice";
import daalReducer from "../components/cart/daal/daalSlice";
import paneerReducer from "../components/cart/paneer/paneerSlice";

const store = configureStore({
	reducer: {
		chapati: chapatiReducer,
		curd: curdReducer,
		pickle: pickleReducer,
		sweet: sweetReducer,
		daal: daalReducer,
		paneer: paneerReducer,
	},
});

export default store;
