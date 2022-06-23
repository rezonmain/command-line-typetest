export default function TestLetter(props) {
	return (
		<span key={props.id} className={props.style}>
			{props.letter}
		</span>
	);
}
