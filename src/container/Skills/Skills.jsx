import React from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Skills.scss';
import { images } from '../../constants';

const Skills = () => {
  const experiences = [{
    year: 2021,
    key: 1,
    works: [{
      name: 'Crypto Web Developer',
      company: 'Fiverr',
      desc: 'Developing web apps required by 3 different crypto companies. Freelance',
    }],
  }, {
    year: 2022,
    key: 2,
    works: [{
      name: 'Mobile Banking App Developer',
      company: 'Movetia',
      desc: 'Developing bank mobile applications. Hybrid and native Apps',
      key: 11,
    }, {
      name: 'Logistics Web Developer',
      company: 'Movilges',
      desc: 'Creating a Web App that manages a Warehouse Manage System.',
      key: 12,
    }, {
      name: 'Web 3 App Developer',
      company: 'Upwork',
      desc: 'Different Web Apps required by crypto companies. Freelance',
      key: 13,
    }],
  }];
  const skills = [{
    name: 'React',
    icon: images.react,
    key: 111,
  }, {
    name: 'GraphQL',
    icon: images.graphql,
    key: 112,
  }, {
    name: 'Javascript',
    icon: images.javascript,
    key: 113,
  }, {
    name: 'HTML5',
    icon: images.html,
    key: 4,
  }, {
    name: 'CSS3',
    icon: images.css,
    key: 5,
  }, {
    name: 'React Native',
    icon: images.react,
    key: 6,
  }, {
    name: 'Rest API',
    icon: images.api,
    key: 7,
  }, {
    name: 'Git',
    icon: images.git,
    key: 8,
  }, {
    name: 'MaterialUI',
    icon: images.mu5,
    key: 9,
  }];

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.key}
            >
              <div
                className="app__flex"
              >
                <img src={(skill.icon)} alt={skill.name} />
                {/* <img src={urlFor(skill.icon)} alt={skill.name} /> */}
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.key}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}

        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);
