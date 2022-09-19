import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from 'react-redux';

function App() {
  const getOut = useSelector((state) => state)
  // dispatch로 값을 가지고 와서 
  const dispatch = useDispatch()
  return (
    <div className="App">
      <p>님의 무게 : {getOut}</p>
      {/* type에 맞는 기능  */}
      <button onClick={() => {dispatch({type : "증가"})}}>더하기</button>
    </div>
  );
}

export default App;
