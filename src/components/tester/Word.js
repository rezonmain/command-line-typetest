export default function Word({ id, word, cursor, styles }) {
	const letters = word.split('');
	const letterElements = letters.map((letter, i) => {
		return (
			<span key={i} id={i} className={cursor === 1 ? styles[i] : 'untyped'}>
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
