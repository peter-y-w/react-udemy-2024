import { useState } from 'react';

import Player from './components/Player';
import GameBoard from './components/GameBoard';
import Log from './components/Log';
import GameOver from './components/GameOver';
import { WINNING_COMBINATIONS } from './winning-combination';

const symbolOne = 'X';
const symbolTwo = 'O';

const playerOne = {
	id: 1,
	initialName: 'Player 1',
	symbol: symbolOne,
};

const playerTwo = {
	id: 2,
	initialName: 'Player 2',
	symbol: symbolTwo,
};

const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

const deriveActivePlayer = gameTurns =>
	gameTurns[0]?.player === playerOne ? playerTwo : playerOne;

const deriveWinner = (gameBoard, players) => {
	let winner = null;
	for (const combination of WINNING_COMBINATIONS) {
		const firstSquareSymbol =
			gameBoard[combination[0].row][combination[0].column];
		const secondSquareSymbol =
			gameBoard[combination[1].row][combination[1].column];
		const thirdSquareSymbol =
			gameBoard[combination[2].row][combination[2].column];

		if (
			!!firstSquareSymbol &&
			firstSquareSymbol === secondSquareSymbol &&
			firstSquareSymbol === thirdSquareSymbol
		) {
			winner = players[firstSquareSymbol];
		}
	}
	return winner;
};

const deriveGameBoard = gameTurns => {
	let gameBoard = [...initialGameBoard].map(array => [...array]);

	for (const turn of gameTurns) {
		const { square, player } = turn;
		const { row, col } = square;
		gameBoard[row][col] = player.symbol;
	}
	return gameBoard;
};

function App() {
	const [players, setPlayers] = useState({
		[symbolOne]: playerOne.initialName,
		[symbolTwo]: playerTwo.initialName,
	});
	const [gameTurns, setGameTurns] = useState([]);

	const activePlayer = deriveActivePlayer(gameTurns);
	const gameBoard = deriveGameBoard(gameTurns);
	const winner = deriveWinner(gameBoard, players);
	const hasDraw = gameTurns.length === 9 && !winner;

	const handleSelectSquare = (rowIndex, colIndex) => {
		setGameTurns(prevTurns => {
			const turn = {
				square: { row: rowIndex, col: colIndex },
				player: deriveActivePlayer(prevTurns),
			};
			return [turn, ...prevTurns];
		});
	};

	const handleRestart = () => {
		setGameTurns([]);
	};

	const handleNameUpdate = (symbol, newName) => {
		setPlayers(prevState => {
			return {
				...prevState,
				[symbol]: newName,
			};
		});
	};

	return (
		<main>
			<div id="game-container">
				<ol id="players" className="highlight-player">
					<Player
						initialName={playerOne.initialName}
						symbol={playerOne.symbol}
						isActive={activePlayer === playerOne}
						onChangeName={handleNameUpdate}
					/>
					<Player
						initialName={playerTwo.initialName}
						symbol={playerTwo.symbol}
						isActive={activePlayer === playerTwo}
						onChangeName={handleNameUpdate}
					/>
				</ol>
				{(winner || hasDraw) && (
					<GameOver winner={winner} onRestart={handleRestart} />
				)}
				<GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
			</div>
			<Log turns={gameTurns}></Log>
		</main>
	);
}

export default App;
