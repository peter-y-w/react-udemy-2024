import { useState } from 'react';
import Header from './components/Header';
import Result from './components/Result';
import UserInput from './components/UserInput';

const initParams = {
	initialInvestment: 0,
	annualInvestment: 0,
	expectedReturn: 0,
	duration: 0,
};

function App() {
	const [userParams, setUserParams] = useState(initParams);

	const handleUserInputUpdate = newParam => {
		setUserParams(prevParams => ({ ...prevParams, ...newParam }));
	};

	return (
		<>
			<Header />
			<main>
				<UserInput onUpdateUserInput={handleUserInputUpdate} />
				<Result params={userParams} />
			</main>
		</>
	);
}

export default App;
