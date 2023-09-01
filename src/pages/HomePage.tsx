import Home from "../components/Home";
import { SetShowsDataFunction, IShow } from "../App";

function HomePage({ showsData, setShowsData }: { showsData: IShow | undefined; setShowsData: SetShowsDataFunction}) {
	return (
		<>
			<Home showsData={showsData} setShowsData={setShowsData}/>
		</>
	);
}

export default HomePage;
