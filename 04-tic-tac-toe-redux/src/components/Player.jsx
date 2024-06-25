import { useState } from 'react';

export default function Player({
	initialName,
	symbol,
	isActive,
	onChangeName,
}) {
	const [playerName, setPlayerName] = useState(initialName);
	const [isEditing, setIsEditing] = useState(false);

	const handleInputChange = event => {
		setPlayerName(event.target.value);
	};

	const handleEditClick = () => {
		!!isEditing && onChangeName(symbol, playerName);
		setIsEditing(prevState => !prevState);
	};

	return (
		<li className={isActive ? 'active' : undefined}>
			<span className="player">
				{isEditing ? (
					<input type="text" value={playerName} onChange={handleInputChange} />
				) : (
					<span className="player-name">{playerName}</span>
				)}
				<span className="player-symbol">{symbol}</span>
			</span>
			<button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
		</li>
	);
}
