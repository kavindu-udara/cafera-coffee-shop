import './App.css'
import About from './components/About'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import PageOutlet from './components/PageOutlet'
import Review from './components/Review'
import Store from './components/Store'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<PageOutlet/>}>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/store' element={<Store/>} />
          <Route path='/review' element={<Review/>} />
          <Route path='/contactus' element={<ContactUs/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
