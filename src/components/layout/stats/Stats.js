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
						Time: <b>{'1hr 30min'}</b>
					</li>
					<li>
						WPM: <b>{'28.3'}</b>
					</li>
					<li>
						Mistakes: <b>{'12'}</b>
					</li>
					<li>
						Accuracy: <b>{'80'}</b>
					</li>
					<li>
						Score: <b>{'234'}</b>
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
