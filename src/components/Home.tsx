import PageNav from "../components/PageNav";
import { SetShowsDataFunction, IShow } from "../App";
import { useNavigate } from "react-router-dom";

function Home({
	showsData,
	setShowsData,
}: {
	showsData: IShow | undefined;
	setShowsData: SetShowsDataFunction;
}) {

	const navigation = useNavigate();

	function handleShowPage(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
		if (!e.target) return;
		const showId = (e.target as HTMLDivElement).closest("div")?.id;
		if (!showId) return;
		navigation(`/show/${showId}`);
	}


	return (
		<>
			<section className="home-page">
				{showsData?.tv_shows.map((show) => {
					return (
						<div className="home-page__show" key={show.id} onClick={handleShowPage} id={show.id.toString()}>
							<img
								src={show.image_thumbnail_path}
								alt={show.name}
							/>
							<h3> {show.name} </h3>
							<span className="home-page__show-status">
								{show.status}
							</span>
						</div>
					);
				})}
			</section>
			{showsData && (
				<PageNav
					currentPage={showsData.page}
					totalPages={showsData.pages}
					onPageChange={(newPage) =>
						setShowsData({ ...showsData, page: newPage })
					}
				/>
			)}
		</>
	);
}

export default Home;
