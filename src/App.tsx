import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import MainPage from "./pages/MainPage";
import HomePage from "./pages/HomePage";
import ShowPage from "./pages/ShowPage";

export type SetShowsDataFunction = (data: IShow | undefined) => void;

export interface IShow {
	total: number;
	page: number;
	pages: number;
	tv_shows: {
		id: number;
		name: string;
		status: string;
		image_thumbnail_path: string;
	}[];
}

function App() {
	const [showsData, setShowsData] = useState<IShow | undefined>();

	async function fetchPopularList(page: number) {
		try {
			const response = await fetch(
				`https://www.episodate.com/api/most-popular?page=${page}`
			);
			const data = await response.json();
			setShowsData(data);
		} catch (error) {
			console.error("Error fetching popular data:", error);
		}
	}

	useEffect(() => {
		fetchPopularList(showsData?.page || 1);
	}, [showsData?.page]);

	return (
		<div className="App">
			<Nav setShowsData={setShowsData} />

			<Routes>
				<Route
					path="/"
					element={<MainPage setShowsData={setShowsData} />}
				/>
				<Route path="/home" element={<HomePage showsData={showsData} setShowsData={setShowsData} />} />
				<Route path="/show/:id" element={<ShowPage />} />
			</Routes>
		</div>
	);
}

export default App;
