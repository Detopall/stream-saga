import { SetShowsDataFunction } from "../App";

function SearchBar({ setShowsData }: { setShowsData: SetShowsDataFunction }) {
	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const input = e.currentTarget.elements[0] as HTMLInputElement;
		if (!input.value) return;

		const response = await fetch(
			`https://www.episodate.com/api/search?q=${input.value}&page=1`
		);
		const data = await response.json();
		setShowsData(data);
	}

	return (
		<>
			<div className="search">
				<form onSubmit={handleSubmit}>
					<input type="text" placeholder="Search" />
					<button type="submit"> Search </button>
				</form>
			</div>
		</>
	);
}

export default SearchBar;
