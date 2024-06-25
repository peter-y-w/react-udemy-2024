import { calculateInvestmentResults } from '../util/investment';

const cols = [
	'Year',
	'Investment Value',
	'Interest (Year)',
	'Total Interest',
	'Invested Capital',
];

export default function Result({ params }) {
	const resultsByYear = calculateInvestmentResults(params);
	console.log(resultsByYear);

	return (
		<table id="result">
			<thead>
				<tr>
					{cols.map(col => (
						<th key={col}>{col}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{resultsByYear.map(result => (
					<tr>
						<td>{result.year}</td>
						<td>{result.valueEndOfYear}</td>
						<td>{result.interest}</td>
						<td>{result.year}</td>
						<td>{result.annualInvestment}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
