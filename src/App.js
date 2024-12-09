import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { useTelegram } from './components/hooks/useTelegram';
import ProductList from './components/ProductList/ProductList';
import { Route, Routes } from 'react-router-dom';


function App() {
  
  const {tg} = useTelegram();

  useEffect(() => {
    tg.ready();
  })

  return (
    <div className="wrapper">
      <div>
        <Header/>
        <Routes>
          <Route index element={<ProductList />}/>
        </Routes>
      </div>
    </div> 
  );
}

export default App;
