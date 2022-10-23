import './App.css';
import Navigation from './components/navigation/Navigation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/public/home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
      </Routes>
      </BrowserRouter>
      
    
    </div>
  );
}

export default App;
