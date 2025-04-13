import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom"
// Pages
import Login from './Pages/Login'
import Home from './Pages/Home'
import Information from './Pages/Information'
import Reservations from './Pages/Reservations'
import Location from './Pages/Location'
import Contact from './Pages/Contact'
import Payment from './Pages/Payment'
// Components
import Loading from './Components/Loading'
import DropdownNavbar from './Components/DropdownNavbar'
import Footer from './Components/Footer'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate network delay
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <Loading />;

  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

function AppRoutes() {
  const location = useLocation();
  const hideFooterPaths = ['/join', '/location', '/payment'];
  const hideNavbar = ['/join', '/payment'];
  const showFooter = !hideFooterPaths.includes(location.pathname);
  const showNavbar = !hideNavbar.includes(location.pathname);

  return (
    <>
      {showNavbar && <DropdownNavbar />}

      {/* 👉 Move Routes here under Router context */}
      <Routes>
        <Route path='/' element={<Navigate to="/home" replace />} />
        <Route path='/join' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/information' element={<Information />} />
        <Route path='/reservations' element={<Reservations />} />
        <Route path='/location' element={<Location />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/payment' element={<Payment />} />
      </Routes>

      {showFooter && <Footer />}
    </>
  );
}


export default App;
