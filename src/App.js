import './App.css';
import { useTelegram } from './components/hooks/useTelegram';


function App() {
  
  const {onToggleButton} = useTelegram

  return (
    <div className="App">
      <button onClick={onToggleButton}>toggle</button>
    </div> 
  );
}

export default App;
