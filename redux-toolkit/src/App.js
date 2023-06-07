import logo from './logo.svg';
import './App.css';
import CounterBox from './components/CounterBox';
import MemoComp from './components/MemoComp';
import ThunkBox from './components/ThunkBox';
import WeatherComp from './components/WeatherComp';

function App() {
  return (
    <div className="App">
      {/* 리덕스 툴킷 사용방법 */}
      <CounterBox/>
      {/* 리덕스 툴킷에서 배열값 사용방법 */}
      <MemoComp/>
      {/* 리덕스에서 비동기함수 사용 */}
      <ThunkBox/>
      {/* 리덕스에서 비동기함수 활용하여 API 사용 */}
      <WeatherComp/>
    </div>
  );
}

export default App;
