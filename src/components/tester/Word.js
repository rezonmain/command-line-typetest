export default function Word(props) {
	const letters = props.text.split('');
	const letterElements = letters.map((letter, i) => {
		let classname = props.letter === i ? 'cursor' : '';
		classname += ' untyped';

		return (
			<span key={i} id={i} className={classname}>
				{letter}
			</span>
		);
	});
	return (
		<span key={props.id} id={props.id}>
			{letterElements}
		</span>
	);
}
