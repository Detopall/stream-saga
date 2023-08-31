import { useState } from "react";

function Home() {
	const popularData = {
		total: "24332",
		page: 1,
		pages: 1217,
		tv_shows: [
			{
				id: 35624,
				name: "The Flash",
				permalink: "the-flash",
				start_date: "2014-10-07",
				end_date: null,
				country: "US",
				network: "The CW",
				status: "Ended",
				image_thumbnail_path:
					"https://static.episodate.com/images/tv-show/thumbnail/35624.jpg",
			},
			{
				id: 23455,
				name: "Game of Thrones",
				permalink: "game-of-thrones",
				start_date: "2011-04-17",
				end_date: null,
				country: "US",
				network: "HBO",
				status: "Ended",
				image_thumbnail_path:
					"https://static.episodate.com/images/tv-show/thumbnail/23455.jpg",
			},
			{
				id: 24010,
				name: "The Walking Dead",
				permalink: "the-walking-dead",
				start_date: "2010-10-31",
				end_date: null,
				country: "US",
				network: "AMC+",
				status: "Ended",
				image_thumbnail_path:
					"https://static.episodate.com/images/tv-show/thumbnail/24010.jpg",
			},
			{
				id: 32157,
				name: "Rick and Morty",
				permalink: "rick-and-morty",
				start_date: "2013-12-02",
				end_date: null,
				country: "US",
				network: "Adult Swim",
				status: "Running",
				image_thumbnail_path:
					"https://static.episodate.com/images/tv-show/thumbnail/32157.jpg",
			},
		],
	};

	async function fetchPopularList() {
		const [page, setPage] = useState(1);

		/*
		const response = await fetch(
			`https://www.episodate.com/api/most-popular?page=${page}`
		);
		*/

		//const popularData = await response.json();

		console.log(popularData);
	}

	fetchPopularList();

	return (
		<>
			<section className="home-page">
				{popularData.tv_shows.map((show) => {
					return (
						<div className="home-page__show" key={show.id}>
							<img
								src={show.image_thumbnail_path}
								alt={show.name}
							/>
							<h3> {show.name} </h3>
							<span className="home-page__show-status">
								{show.status}
							</span>
							<span className="home-page__show-start-date">
								{show.start_date.split("-")[0]}
							</span>
						</div>
					);
				})}
			</section>
		</>
	);
}

export default Home;
