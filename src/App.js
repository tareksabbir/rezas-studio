import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Footer/Footer';
import Header from './Header/Header';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Header></Header>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
