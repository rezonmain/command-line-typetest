import Tester from '../../tester/Tester';
import Header from '../header/Header';
import './Terminal.css';
import { commands } from '../../../data';
export default function Terminal() {
	return (
		<section className='terminal-section'>
			<Header title={'/users/rez'} />
			<div className='terminal-container'>
				<Tester commands={commands} />
			</div>
		</section>
	);
}
