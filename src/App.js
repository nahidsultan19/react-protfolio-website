import { Route, Routes } from 'react-router-dom';
import './App.css';
import Detail from './Components/Detail';
import Home from './Components/Home';
import Footer from './Shared/Footer';
import Header from './Shared/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
