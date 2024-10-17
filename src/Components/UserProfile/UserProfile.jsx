import React from 'react';
import './UserProfile.css';
import profile_icon from '../Assets/salah.site.jpg';
import error_vid from '../Assets/error.mp4';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const UserProfile = () => {
  return (
    <div className="background"> 
      <video autoPlay loop muted className="background-video">
        <source src={error_vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className='upc'>
        <div className="gradinant"></div>
        <div className="profile-down">
          <img src={profile_icon} alt="Profile" />
          <div className="profile-title">Salah Dve</div>
          <div className="profile-description">
            I am a programmer who recently graduated and am currently working on projects to secure a job. I have experience in full-stack development, specializing in JavaScript, React, and React Native.
          </div>
          <div className="profile-button">
            <a href="mailto:error.salah59@gmail.com">Contact Me</a>
          </div>
          <div className="social-icons">
            <a href="https://github.com/salah-alstre" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/salah-alden-8aba5a322" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
