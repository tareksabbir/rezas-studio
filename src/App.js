import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Pricing from './Components/Pricing/Pricing';
import Footer from './Components/Footer/Footer'
import Error from './Components/Error/Error';
import Blog from './Components/Blog/Blog';
import BigGallery from './Components/Gallery/BigGallery';
import Login from './Login/Login';


function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Header></Header>}></Route>
        <Route path='/bigallery' element={<BigGallery></BigGallery>}></Route>
        <Route path='/pricing' element={<Pricing></Pricing>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>


        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
      <Footer></Footer>






    </>
  );
}

export default App;
