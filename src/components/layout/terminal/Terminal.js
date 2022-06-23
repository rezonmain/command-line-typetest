import { useEffect } from 'react';
import Tester from '../../tester/Tester';
import Header from '../header/Header';
import './Terminal.css';
export default function Terminal({ terminal }) {
	useEffect(() => {
		document
			.getElementById('typetester')
			.scrollIntoView({ behavior: 'smooth' });
	});
	return (
		<section className='terminal-section'>
			<Header title={'/users/rez'} />
			<div className='terminal-container'>
				<Tester
					wordElements={terminal.testLetterElements}
					lines={terminal.lines}
				/>
			</div>
		</section>
	);
}
