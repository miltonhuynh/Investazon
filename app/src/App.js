import './App.css';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Checkout" element={<Checkout />}>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
