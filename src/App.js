import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';
import Home from './views/public/home/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
