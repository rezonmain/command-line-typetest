import Header from '../header/Header';
import './Stats.css';
import './Tooltip.css';
import Stepper from './Stepper';
import { ReactComponent as ToolTip } from './question.svg';
export default function Stats(props) {
	return (
		<section className='stats-section'>
			<Header title='Stats' />
			<div className='stats-container'>
				<ul className='stats'>
					<li>
						Time:{' '}
						<b>
							{parseInt(props.stats.time / 60)}min {props.stats.time % 60}s
						</b>
						<div className='tooltip' data-tooltip='Time spent typing'>
							<ToolTip />
						</div>
					</li>
					<li>
						{/* Dont show wpm until user has typed for at least 20seconds
            instead show a waiting animation*/}
						Speed:{' '}
						<b className={props.stats.time < 20 ? 'waiting' : ''}>
							{props.stats.time >= 20 ? props.stats.wpm + ' wpm' : ''}
						</b>
						<div
							className='tooltip'
							data-tooltip='Number of words (commands) typed in a minute'>
							<ToolTip />
						</div>
					</li>
					<li>
						Mistakes: <b>{props.stats.mistakes}</b>{' '}
						<div className='tooltip' data-tooltip='Number of incorrect entries'>
							<ToolTip />
						</div>
					</li>

					<li>
						Accuracy: <b>{props.stats.accuracy || '0'}%</b>{' '}
						<div
							className='tooltip'
							data-tooltip='Percentage of correct entries'>
							<ToolTip />
						</div>
					</li>

					<li>
						Score: <b>{props.stats.score}</b>{' '}
						<div className='tooltip' data-tooltip='Number of correct entries'>
							<ToolTip />
						</div>
					</li>
				</ul>
				<hr></hr>
				<div className='font-size-stepper'>
					<span>Font size:</span>
					<Stepper fontChange={props.fontChange} />
					<button onClick={() => props.fontChange('reset')} className='button'>
						Reset
					</button>
				</div>

				<button onClick={() => props.clearConsole()} className='button'>
					Clear console
				</button>
				<hr></hr>
				{/* prettier-ignore */}
				<pre className='ascii-logo'>
      {`            (/////,                   
              ////////////              
                 //////////////         
                       /////////////.   
                            .///////////
                                 ///////
                           /////////////
                     /////////////*     
               ,/////////////*          
              //////////,               
////*       (////.                    
////* 
   +-+-+-+-+-+-+-+ +-+-+-+-+ +-+-+-+-+ 
   |C|O|M|M|A|N|D| |T|Y|P|E| |T|E|S|T|
   +-+-+-+-+-+-+-+ +-+-+-+-+ +-+-+-+-+`}
			</pre>
				<hr></hr>
				<small> &copy; 2022 made by rezonmain</small>
			</div>
		</section>
	);
}
