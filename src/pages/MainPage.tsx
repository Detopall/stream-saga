import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";

function MainPage() {
	return (
		<>
			<section className="main-page">
				<div className="main-page__logo">
					<Link to="/home">
						<img src="stream-saga-logo.png" alt="logo" />
					</Link>
				</div>
				<h1> Stream Saga </h1>

				<SearchBar />
			</section>

			<div className="main-page__home-button">
				<Link to="/home">
					<button> View Popular Shows </button>
				</Link>
			</div>

			<section className="main-page__description">
				<p>
					Welcome to <b>Stream Saga</b>, your ultimate destination for
					discovering and enjoying an incredible collection of shows
					and episodes. Immerse yourself in a world of entertainment
					that spans across various genres, from thrilling dramas to
					hilarious comedies and everything in between.
				</p>
				<p>
					Our carefully curated selection of shows will keep you
					captivated for hours on end. With user-friendly features and
					a seamless experience, finding your favorite series has
					never been easier. Discover new episodes, keep track of your
					progress, and engage with fellow enthusiasts to share your
					thoughts and recommendations.
				</p>
				<p>
					We're powered by the <b>Episodate API</b>, which ensures that our
					show database is up to date and accurate. Explore a diverse
					range of shows and access detailed information to enhance
					your viewing experience. Our logo was created with the help
					of <b>FreeLogoDesign</b>, a fantastic platform for designing
					eye-catching logos that represent our brand's essence.
				</p>
				<p>
					Join us in the exciting journey of entertainment
					exploration. Your next favorite show is just a click away.
				</p>
				<p>
					<a
						href="https://www.episodate.com/api/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn more about Episodate API
					</a>
					<br />
					<a
						href="https://www.freelogodesign.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Design your logo with FreeLogoDesign
					</a>
				</p>
			</section>
		</>
	);
}

export default MainPage;
