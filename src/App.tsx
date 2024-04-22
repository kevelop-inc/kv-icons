import {
  Arrow,
  Chevron,
  Close,
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
      <Arrow classes="fill-red size-10 rotate-90" />
      <Chevron classes="stroke-red size-10" />
      <Close classes="stroke-red size-10" />
      <Discord classes="fill-red size-10" />
      <Home classes="stroke-red size-10 stroke-[8px]" />
      <Instagram classes="stroke-red size-10" />
      <Play classes="fill-red size-10" />
      <QuotationMark classes="stroke-red size-10 stroke-2 fill-cyan" />
      <Star classes="fill-red size-10" />
      <Tick classes="stroke-red size-10" />
      <X classes="fill-red size-10" />
    </>
  );
}

export default App;
