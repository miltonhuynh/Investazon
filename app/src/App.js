import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<h1>Login page placeholder</h1>} />
          <Route path="/Checkout" element={<Checkout />}>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
