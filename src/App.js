import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import Testimonials from './components/testimonials/Testimonials';
import About from './components/about/About';
import Resume from './components/resume/Resume';

function App() {
  return (
    <>
      <Sidebar />
     <main className='main'>
        <Home />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        {/* <Testimonials /> */}
        <Contact />
     </main>
    </>
  );
}

export default App;
