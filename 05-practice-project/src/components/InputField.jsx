export default function InputField({ labelText, id }) {
	return (
		<span>
			<label htmlFor={id}>{labelText}</label>
			<input type="number" id={id} />
		</span>
	);
}
