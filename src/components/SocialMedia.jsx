import React from 'react';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/alesfg">
        <BsGithub />
      </a>
    </div>
    <div>
      <a href="https://linkedin.com/in/alexfloresgonzalez/">
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/thewisebear/">
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
