export default function Word(props) {
	const letters = props.text.split('');
	const letterElements = letters.map((letter, i) => (
		<span key={i} id={i} className={props.letter === i ? 'cursor' : ''}>
			{letter}
		</span>
	));
	return (
		<span key={props.id} id={props.id}>
			{letterElements}
		</span>
	);
}
