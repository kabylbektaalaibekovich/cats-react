import './App.css';
import Header from './components/Header/Header';
import Main from './pages/Main';
import Favorite from './pages/Favorite';
// import Cats from './pages/Cats/cats';
import Admin from './pages/Admin';
import Basket from './pages/Basket/basket';
import { Routes , Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

    <Header/>
    <Routes>
    <Route path="/" element={<Main/>}/> 
    <Route path="/favorite"element={<Favorite/>}/> 
    <Route path="/admin" element={<Admin/>}/> 
    {/* <Route path='/button' element={<Cats/>}/> */}
    <Route path='/basket' element={<Basket/>}/>
    </Routes>
    </div>
  );
} 

export default App;
