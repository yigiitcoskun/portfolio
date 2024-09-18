// Home.js
import React from 'react';
import './Home.css'; // CSS dosyanızı import edin
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  return (
    <div id="home" className="home-section">
      <div className="home-content">
        <h1 className="home-title">Mustafa Yiğit Coşkun</h1>
        <p className="home-subtitle">Software Developer</p>
        <div className="animation-line animation-line-top"></div>
        <div className="animation-line animation-line-bottom"></div>
      </div>

      {/* Social icons */}
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/mustafa-yigit-coskun" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="icon linkedin" />
        </a>
        <a href="https://github.com/yigiitcoskun" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="icon github" />
        </a>
      </div>
    </div>
  );
};

export default Home;
