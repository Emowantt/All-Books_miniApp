import './App.css';
import Header from './components/Header/Header';
import { useTelegram } from './components/hooks/useTelegram';


function App() {
  
  const {onToggleButton} = useTelegram

  return (
    <div className="App">
      <Header/>
      <button onClick={onToggleButton}>toggle</button>
    </div> 
  );
}

export default App;
