import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Newsletter from './Components/Navbar/Newsletter/Newsletter';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Pricing from './Pricing/Pricing';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Header></Header>}></Route>
        <Route path='/pricing' element={<Pricing></Pricing>}></Route>
      </Routes>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </>
  );
}

export default App;
