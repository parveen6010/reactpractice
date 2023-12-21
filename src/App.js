import { Profiler } from 'react';
import './App.css';
import Addproduct from './component/Addproduct';
import Home from './component/Home';
import Login from './component/Login';
import Navigation  from './component/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Updateproduct from './component/Updateproduct';
import Registration from './component/Registration';
import Profile from './component/Profile';
import Footer from './component/Footer';
import Privtecomponent from './component/Privtecomponent';
import Logout from './component/Logout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation />
      <Routes>
        
        <Route element={<Privtecomponent /> }>
        <Route path='/' element={<Home/>} />
        <Route path='/addproduct'element={<Addproduct/>} />
        <Route path='/updateproduct'element={<Updateproduct/>} />
        <Route path='/login'element={<Login/>} />
        <Route path='/profile'element={<Profile/>} />
        <Route path='/logout'element={<Logout/>} />
        </Route>
        <Route path='/signup'element={<Registration/>} />

      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
