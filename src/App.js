import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Header from './Shared/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
