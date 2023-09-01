interface PageNavProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

function PageNav({ currentPage, totalPages, onPageChange }: PageNavProps) {
	const goToPage = (page: number) => {
		if (page >= 1 && page <= totalPages) {
			onPageChange(page);
		}
	};

	return (
		<div className="pages">
			{currentPage > 1 && (
				<>
					<button onClick={() => goToPage(1)}>First</button>
					<button onClick={() => goToPage(currentPage - 1)}>
						Previous
					</button>
				</>
			)}
			<button className="current" onClick={() => goToPage(currentPage)}>
				{currentPage}
			</button>
			{currentPage < totalPages && (
				<>
					<button onClick={() => goToPage(currentPage + 1)}>
						{currentPage + 1}
					</button>
				</>
			)}
			{currentPage !== totalPages && (
				<button onClick={() => goToPage(totalPages)}>Last</button>
			)}
		</div>
	);
}

export default PageNav;
