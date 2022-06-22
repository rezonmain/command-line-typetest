import Tester from '../../tester/Tester';
import Header from '../header/Header';
import './Terminal.css';
import { commands } from '../../../data';
export default function Terminal({ terminal }) {
	return (
		<section className='terminal-section'>
			<Header title={'/users/rez'} />
			<div className='terminal-container'>
				<Tester
					words={terminal.words}
					lines={terminal.lines}
					cursor={terminal.cursor}
				/>
			</div>
		</section>
	);
}
