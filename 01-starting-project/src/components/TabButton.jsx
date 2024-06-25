export default function TabButton({ children, isSelected, ...restProps }) {
	return (
		<li>
			<button className={isSelected ? 'active' : ''} {...restProps}>
				{children}
			</button>
		</li>
	);
}
