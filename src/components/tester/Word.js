export default function Word({ id, word, currentChar }) {
	const letters = word.split('');

	const letterElements = letters.map((letter, i) => {
		let classname = currentChar === i ? 'cursor' : '';

		return (
			<span key={i} id={i} className={classname}>
				{letter === '\n' ? '⏎' : letter}
			</span>
		);
	});
	return (
		<span key={id} id={id}>
			{letterElements}
		</span>
	);
}
