import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Pricing from './Components/Pricing/Pricing';
import Newsletter from './Components/Newsletter/Newsletter'
import Footer from './Components/Footer/Footer'



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
