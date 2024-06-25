export default function GameBoard({ onSelectSquare, board }) {
	return (
		<ol id="game-board">
			{board.map((row, rowIndex) => (
				<li key={rowIndex}>
					<ol>
						{row.map((square, colIndex) => (
							<li key={colIndex}>
								<button
									onClick={() => onSelectSquare(rowIndex, colIndex)}
									disabled={!!square}
								>
									{square}
								</button>
							</li>
						))}
					</ol>
				</li>
			))}
		</ol>
	);
}
