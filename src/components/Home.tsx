import PageNav from "../components/PageNav";
import { SetShowsDataFunction, IShow } from "../App";

function Home({
	showsData,
	setShowsData,
}: {
	showsData: IShow | undefined;
	setShowsData: SetShowsDataFunction;
}) {
	return (
		<>
			<section className="home-page">
				{showsData?.tv_shows.map((show) => {
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
