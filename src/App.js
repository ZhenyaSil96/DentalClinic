import logo from './logo.svg';

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Contacts from './components/Contacts/Contacts';
import ProfileOurServises from './components/ProfileOurServises/ProfileOurServises';
import Price from './components/Price/Price';
import About from './components/About/About';
import OurPerson from './components/OurPerson/OurPerson';

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
    <Route path='poslygu' element={<ProfileOurServises/>}/>
    <Route path='price' element={<Price/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='our_person' element={<OurPerson/>}/>
    </Routes>
    <div>
      <Footer/>
    </div>
    </BrowserRouter>
    
  
  );
}

export default App;
