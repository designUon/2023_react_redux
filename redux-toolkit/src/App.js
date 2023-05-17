import logo from './logo.svg';
import './App.css';
import CounterBox from './components/CounterBox';
import MemoComp from './components/MemoComp';
import ThunkBox from './components/ThunkBox';
import WeatherComp from './components/WeatherComp';

function App() {
  return (
    <div className="App">
      <CounterBox/>
      <MemoComp/>
      <ThunkBox/>
      <WeatherComp/>
    </div>
  );
}

export default App;
