import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Pricing from './components/Pricing/Pricing';
import Rechart from './components/Reachart/Rechart';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <h1 className='text-5xl mt-5'>Pricing Club</h1>
      <h1 className='text-5xl mt-5'>Welcome to my Pricing Club</h1>
      <Pricing></Pricing>
      <Rechart></Rechart>
    </div>
  );
}

export default App;
