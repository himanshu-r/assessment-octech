
import './App.css';
import { Routes, Route} from "react-router-dom"
import Home from './components/Home';
import Error from './components/Error';
import SingleProduct from './components/SingleProducts';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products/:id" element={<SingleProduct/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
  );
}

export default App;
