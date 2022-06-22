export default function Word({ id, word }) {
	const letters = word.split('');
	const letterElements = letters.map((letter, i) => {
		return (
			<span key={i} id={i} className={'untyped'}>
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
