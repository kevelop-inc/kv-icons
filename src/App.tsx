import {
  Arrow,
  Chevron,
  Close,
  CloseCircle,
  Discord,
  Home,
  Instagram,
  Play,
  QuotationMark,
  Star,
  Tick,
  X,
} from '../';
import './App.css';

function App() {
  return (
    <>
      <Arrow className="fill-red size-10 rotate-90" />
      <Chevron className="stroke-red size-10" />
      <Close className="stroke-red size-10" />
      <Discord className="fill-red size-10" />
      <Home className="stroke-red size-10 stroke-[8px]" />
      <Instagram className="stroke-red size-10" />
      <Play className="fill-red size-10" />
      <QuotationMark className="stroke-red size-10 stroke-2 fill-cyan" />
      <Star className="fill-red size-10" />
      <Tick className="stroke-red size-10" />
      <X className="fill-red size-10" />
      <CloseCircle className="fill-red size-10" />
    </>
  );
}

export default App;
