import {
	Arrow,
	Check,
	Chevron,
	Circle,
	Close,
	CloseCircle,
	Discord,
	DotsHorizontal,
	Flash,
	Home,
	Instagram,
	LoaderCircle,
	Play,
	QuotationMark,
	Star,
	StockArrow,
	Tick,
	X
} from '../';
import { FlashStash } from '../lib/FlashStash';
import './App.css';

function App() {
	return (
		<>
			<StockArrow className='fill-red size-10 rotate-90' />
			<Arrow
				direction='up'
				className='fill-red size-10 rotate-90'
			/>
			<Circle className='stroke-red size-10' />
			<Chevron
				direction='up'
				className='stroke-red size-10'
			/>
			<Close className='stroke-red size-10' />
			<Discord className='fill-red size-10' />
			<Flash className='fill-red size-10' />
			<FlashStash className='fill-red size-10' />
			<Home className='stroke-red size-10 stroke-[8px]' />
			<Instagram className='stroke-red size-10' />
			<Play className='fill-red size-10' />
			<QuotationMark className='stroke-red size-10 stroke-2 fill-cyan' />
			<Star className='fill-red size-10' />
			<Tick className='stroke-red size-10' />
			<X className='fill-red size-10' />
			<CloseCircle className='fill-red size-10' />
			<LoaderCircle className='stroke-red size-10' />
			<Check
				strokeWidth='5'
				color='red'
				className='size-10'
			/>
			<DotsHorizontal
				color='red'
				className='size-10'
			/>
		</>
	);
}

export default App;
