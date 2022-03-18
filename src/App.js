import logo from './logo.svg';

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Contacts from './components/Contacts/Contacts';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Header/>
     {/* <Navbar/> */}
    </div>
    <Routes>
    <Route path='profile' element={<Profile/>}/>
    <Route path='contacts' element={<Contacts/>}/>
    </Routes>
    <div>
      <Footer/>
    </div>
    </BrowserRouter>
    
  
  );
}

export default App;
