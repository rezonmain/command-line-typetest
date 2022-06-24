import Header from '../header/Header';
import './Stats.css';
import Stepper from './Stepper';
export default function Stats(props) {
	return (
		<section className='stats-section'>
			<Header title='Stats' />
			<div className='stats-container'>
				<ul className='stats'>
					<li>
						Time: <b>{parseInt(props.stats.time / 60)} min</b>
					</li>
					<li>
						{/* Dont show wpm until user has typed for at least 20seconds
            instead show a waiting animation*/}
						Speed:{' '}
						<b className={props.stats.time < 20 ? 'waiting' : ''}>
							{props.stats.time >= 20 ? props.stats.wpm + ' wpm' : ''}
						</b>
					</li>
					<li>
						Mistakes: <b>{props.stats.mistakes}</b>
					</li>
					<li>
						Accuracy: <b>{props.stats.accuracy || '0'}%</b>
					</li>
					<li>
						Score: <b>{props.stats.score}</b>
					</li>
				</ul>
				<hr></hr>
				<div className='font-size-stepper'>
					<span>Font size:</span>
					<Stepper fontChange={props.fontChange} />
					<div onClick={() => props.fontChange('reset')} className='button'>
						Reset
					</div>
				</div>

				<div onClick={() => props.clearConsole()} className='button'>
					Clear console
				</div>
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
