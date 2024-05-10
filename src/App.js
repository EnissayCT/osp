import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar, Hero } from './Components/Head';
import Footer from './Components/Footer';
import PricingSection from './Components/Pricing';
import LogIn from './Components/LogIN';
import SignUP from './Components/SignUP';
import CardList from './Components/CardList';
import ConvoBubble from './Components/UsInConvo';
import RessourcePage from './Pages/RessourcePage';
import AboutUS from './Components/AboutUs';
import OnlineClassPage from './Pages/OnlineClassesPage';
import Error404 from './Components/err404';
import CreditCard3 from './Components/CreditCard';
import ScrollToTop from './Components/ScrollToTop';
import ProfileSection from './Pages/Profile/ProfileSection';
// import TeamSection from './Pages/Team/Team';


function App() {

  return (
    <Router>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <ConvoBubble />
              <PricingSection />
              <Footer />
            </>
          }
        />
        {/* <Route path="/resources/:name" element={<RessourcePage />} /> */}
        <Route path="/onlineclasses" element={<OnlineClassPage />} />
        <Route path="/userprofile" element={<ProfileSection />} />
        <Route path="/ressources" element={<CardList />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUP />} />
        <Route path="/aboutus" element={<AboutUS />} />
        <Route path="/Payment" element={<CreditCard3 />} />
        <Route path="/test" element={<ProfileSection />} />
        {/* <Route path="/team" element={<TeamSection />} />  */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
