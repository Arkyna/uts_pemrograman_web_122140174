import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import bgImage from "./assets/Untitled-1a.png";
import Navbar from './components/pages/Navbar';
import Hero from './components/pages/Hero';
import Title from './components/misc/Title';
import Previews from './components/pages/Previews';
import Extra from './components/pages/Extra';
import Games from './components/pages/Games';
import Albums from './components/pages/Albums';
import Techs from './components/pages/Techs';
import ErrorBoundary from './components/misc/ErrorBoundary';
import ErrorPage from './components/pages/ErrorPage';
import About from './components/pages/About';
import StarField from './components/misc/StarField'; //silly code

const Home = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-contain bg-center bg-no-repeat bg-black"
    style={{ backgroundImage: `url(${bgImage})` }}>
    <StarField />
    <Hero
      defaultName="Guest"
      description="This page was originally designed for my midterm exams; however, in a rare creative drought, I ended up embracing this kind of blog-web trope as my simple website theme."
    />
    <div className="container">
      <div id="previews">
        <Title subTitle="Those were one of the stuff that i personally like and interested in." title="Go ahead pick one." />
        <ErrorBoundary>
          <Previews />
        </ErrorBoundary>
      </div>
      <Title subTitle="Extra stuff just to fill the emptiness, messy but not empty, atleast." title="see if its interest you." />
      <Extra />
    </div>
  </div>
);

const AppContent = () => {
  const location = useLocation();
  const hideNavbar = location.pathname === '/';
  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/album" element={<Albums />} />
        <Route path="/tech" element={<Techs />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
