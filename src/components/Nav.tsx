import { useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";

function Nav() {
	const location = useLocation();
	const isMainPage = location.pathname === "/";

	return (
		<>
			<nav className="navbar">
				<ul className="navbar__links">
					<li>
						<a href="/" className="navbar__logo">
							<img
								src="stream-saga-logo.png"
								alt="logo"
							/>
						</a>
					</li>
					<li>
						<a href="/home">Home</a>
					</li>

					{ isMainPage ? null : <SearchBar /> }

					<li>
						<a href="/about">About</a>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default Nav;
