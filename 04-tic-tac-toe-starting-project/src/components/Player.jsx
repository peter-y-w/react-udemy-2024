import { useState } from 'react';

export default function Player({ name, symbol }) {
	const [isEditing, setIsEditing] = useState(false);
	const [playerName, setPlayerName] = useState(name);

	const handleEditClick = () => {
		setIsEditing(prevState => !prevState);
	};

	const handleInputChange = event => {
		const value = event?.target?.value;
		value && setPlayerName(value);
	};

	return (
		<li>
			<span className="player">
				{isEditing ? (
					<input
						onChange={handleInputChange}
						type="text"
						value={playerName}
						required
					/>
				) : (
					<span className="player-name">{playerName}</span>
				)}
				<span className="player-symbol">{symbol}</span>
			</span>
			<button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
		</li>
	);
}
