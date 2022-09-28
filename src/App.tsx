import Navbar from './components/navbar';
import Home from './components/pages/Home';
import About from './components/pages/about';
import Contact from './components/pages/contact';
import AptEng from './components/pages/apteng';
import AptMath from './components/pages/aptmath';
import AptReason from './components/pages/aptreason';
import SkillTest from './components/pages/skilltest';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminSignup from './Quiz-App-Admin/adminsignup';
import AdminLogin from './Quiz-App-Admin/adminlogin';
import Quizboard from './components/pages/dashboard';
import AddQues from './components/CRUD/addques';
import { Provider } from 'react-redux';
// import {store} from './components/CRUD/store'
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/adminsignup" element={<AdminSignup />} />
          <Route path="/dashboard" element={<Quizboard />} />
          <Route path="/addques" element={<AddQues />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/apteng" element={<AptEng />} />
          <Route path="/aptmath" element={<AptMath />} />
          <Route path="/aptreason" element={<AptReason />} />
          <Route path="/jstech" element={<SkillTest />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
