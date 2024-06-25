import InputField from './InputField';

export default function UserInput({ onUpdateUserInput }) {
	const handleFormChange = event => {
		onUpdateUserInput({
			[event.target.id]: parseInt(event.target.value),
		});
	};

	return (
		<form onChange={handleFormChange} id="user-input">
			<div className="input-group">
				<InputField labelText="Initial Investment" id="initialInvestment" />
				<InputField labelText="Annual Investment" id="annualInvestment" />
			</div>
			<div className="input-group">
				<InputField labelText="Expected Return" id="expectedReturn" />
				<InputField labelText="Duration" id="duration" />
			</div>
		</form>
	);
}
