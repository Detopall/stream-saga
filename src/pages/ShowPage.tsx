import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface IShowDetails {
	id: number;
	name: string;
	url: string;
	description: string;
	image_path: string;
	rating: string;
	genres: string[];
	pictures: string[];
	episodes: {
		season: number;
		episode: number;
		name: string;
		air_date: string;
	}[];
}

function ShowPage() {
	const [details, setDetails] = useState<IShowDetails | undefined>();
	const [selectedSeason, setSelectedSeason] = useState<number | undefined>(
		undefined
	);
	const [currentPictureIndex, setCurrentPictureIndex] = useState(0);

	const { id } = useParams();

	useEffect(() => {
		async function fetchShowDetails(id: string) {
			try {
				const response = await fetch(
					`https://www.episodate.com/api/show-details?q=${id}`
				);
				const data = await response.json();
				setDetails(data.tvShow);
			} catch (error) {
				console.error("Error fetching show details:", error);
			}
		}
		if (!id) return;

		fetchShowDetails(id);
	}, [id]);

	function handleNextPicture() {
		if (details && currentPictureIndex < details.pictures.length - 1) {
			setCurrentPictureIndex(currentPictureIndex + 1);
		}
	}

	function handlePrevPicture() {
		if (details && currentPictureIndex > 0) {
			setCurrentPictureIndex(currentPictureIndex - 1);
		}
	}

	function handleSeasonClick(season: number) {
		setSelectedSeason(season);
	}

	return (
		<div className="show-page">
			{details ? (
				<>
					<img src={details.image_path} alt={details.name} />
					<div className="show-page__description">
						<h1>
							<a
								href={details.url}
								target="_blank"
								rel="noopener noreferrer"
							>
								{details.name}
							</a>
						</h1>
						<p>
							{details.description.replace(/<\/?[^>]+(>|$)/g, "")}
						</p>
						<div className="show-page__details">
							<p>
								Rating:
								{details.rating.substring(
									0,
									details.rating.length - 3
								)}
							</p>
							<p>Genres: {details.genres.join(", ")}</p>
						</div>
					</div>
					<div className="show-page__images">
						<img
							src={details.pictures[currentPictureIndex]}
							alt={details.name}
							className="show-page__image"
						/>
						<div className="show-page__image-controls">
							<button onClick={handlePrevPicture}>
								Previous
							</button>
							<span>
								{currentPictureIndex + 1}/
								{details.pictures.length}
							</span>
							<button onClick={handleNextPicture}>Next</button>
						</div>
					</div>
					<div className="show-page__episodes">
						<h2>Seasons</h2>
						<div className="show-page__season-buttons">
							{details.episodes
								.reduce((seasons: number[], episode) => {
									if (!seasons.includes(episode.season)) {
										seasons.push(episode.season);
									}
									return seasons;
								}, [])
								.map((season) => (
									<button
										key={season}
										className={
											season === selectedSeason
												? "active"
												: ""
										}
										onClick={() =>
											handleSeasonClick(season)
										}
									>
										Season {season}
									</button>
								))}
						</div>
						<h2>Episodes</h2>
						<div className="episode-list">
							{details.episodes
								.filter(
									(episode) =>
										episode.season === selectedSeason
								)
								.map((episode) => (
									<div
										key={episode.episode}
										className="episode"
									>
										<p>
											{episode.episode} {"-"}{" "}
											{episode.name}
										</p>
										<button>Watch</button>
									</div>
								))}
						</div>
					</div>
				</>
			) : (
				<p>Loading show details...</p>
			)}
		</div>
	);
}

export default ShowPage;
