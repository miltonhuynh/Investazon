import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
