import "./App.css";
import { Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Body />}>
					<Route path="/" element={<Home />}></Route>
					<Route path="/home" element={<Home />}></Route>
					<Route path="/cart" element={<Cart />}></Route>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
