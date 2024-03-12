import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navigator from "./components/Navigator";
import Store from "./pages/Store";
import Cart from "./pages/Cart";
import { ShopContextProvider } from "./context/shop-context";
import Checkout from "./pages/Checkout";

function App() {
	return (
		<div className='App'>
			<ShopContextProvider>
				<Router>
					<Navigator />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/store/:id' element={<Store />} />
						<Route path='/cart/:id' element={<Cart />} />
						<Route path='/checkout' element={<Checkout />} />
					</Routes>
				</Router>
			</ShopContextProvider>
		</div>
	);
}

export default App;
