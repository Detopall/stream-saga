import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import MainPage from "./pages/MainPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

function App() {

	return (
		<div className="App">
			<Nav />

			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/home" element={<HomePage />} />
				<Route path="/about" element={<AboutPage />} />
			</Routes>
		</div>
	);
}

export default App;
