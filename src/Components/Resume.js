import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <div id="resume" className="resume-section">
      <div className="resume-content">
        <div className="resume-text-container">
          <h2 className="resume-title">About Me</h2>
          <p className="resume-text">
            Hello, I’m Mustafa Yiğit Coşkun, a 21-year-old Computer Programming graduate from Biruni University. My journey into software development began during high school as a hobby, and in 2017, I completed my first project using Arduino for a TÜBİTAK competition. Since then, I’ve grown passionate about Web Development, improving my skills in languages such as HTML, CSS, JavaScript, and Python. I’ve also gained experience with frameworks like React, Django, and Bootstrap. Currently, I am focused on expanding my expertise in Web Development, creating and improving projects in this dynamic field.
          </p>
        </div>
        <div className="resume-divider"></div>
        <div className="resume-photo">
          <img src="../images/278803c6-6155-46c1-8e12-5b1b061d6940.JPG" alt="Mustafa Yiğit Coşkun" />
          <a href="../mustafayigitcoskunresume.pdf" className="resume-download" download>Download CV</a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
