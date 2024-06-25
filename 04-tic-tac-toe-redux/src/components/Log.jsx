export default function Log({ turns }) {
	return (
		<ol id="log">
			{turns.map(turn => {
				const { square, player } = turn;
				const { symbol } = player;
				const { row, col } = square;

				return (
					<li key={`${row}, ${col}`}>{`${symbol} played ${row}, ${col}`}</li>
				);
			})}
		</ol>
	);
}
