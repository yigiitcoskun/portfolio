import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Resume from './Components/Resume';
import Blog from './Components/Blog';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div id="home-section">
        <Home />
      </div>
      <div id="resume-section">
        <Resume />
      </div>
      <div id="blog-section">
        <Blog/>
      </div>
      <div id="contact-section">
        <Contact/>
      </div>
    </div>
  );
}

export default App;
