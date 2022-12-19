import React from 'react';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';

const About = () => <h2 className="head-text">Honesty in <span>small things</span> <br />is not a <span>Small thing</span></h2>;

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);
