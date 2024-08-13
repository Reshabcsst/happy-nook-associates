import Header from './Components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home';
import '../src/Components/Style.scss';
import Footer from './Components/Footer';
import AboutUs from './Components/Pages/AboutUs';
import WhatWeDo from './Components/Pages/WhatWeDo';
import Portfolio from './Components/Pages/Portfolio';
import ContactUs from './Components/Pages/ContactUs';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/what-we-do' element={<WhatWeDo />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
