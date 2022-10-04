import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './Navbar/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About'
import Products from './Pages/Products/Products'

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About/>}></Route>
      <Route path="products" element={<Products/>}></Route>  
      </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
