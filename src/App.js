import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Pricing from './Components/Pricing/Pricing';
import Newsletter from './Components/Newsletter/Newsletter'
import Footer from './Components/Footer/Footer'
import Error from './Components/Error/Error';
import Blog from './Components/Blog/Blog';



function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Header></Header>}></Route>
        <Route path='/pricing' element={<Pricing></Pricing>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>

        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
      <Newsletter></Newsletter>
      <Footer></Footer>






    </>
  );
}

export default App;
