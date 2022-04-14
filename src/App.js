import './App.css';
import Experiences from './components/Experience/Experiences';
import Footer from './components/Footer/Footer';
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';
import Works from './components/Works/Works';
import Contact from './components/Contact/Contact'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
      <Experiences/>
      <Works/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
