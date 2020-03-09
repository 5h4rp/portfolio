import React from 'react';
// import { Link } from 'react-router-dom';
import Me from '../img/Me.png';
import resume from '../files/Ajayender_Singh_Resume.pdf';

const About = () => {
  return (
    <main className='about'>
      <section>
        <div className='ph'>
          <div className='photo'>
            <img src={Me} alt='' />
          </div>
          <div className='title'>
            <h2>Ajayender Singh</h2>
            <h3>Self-taught Web Developer</h3>
            <ul className='socials'>
              <li>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='mailto:ajayender@live.in'
                >
                  <i className='fas fa-envelope'></i>
                </a>
              </li>
              <li>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://www.linkedin.com/in/ajayender-singh/'
                >
                  <i className='fab fa-linkedin'></i>
                </a>
              </li>
              <li>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://github.com/5h4rp'
                >
                  <i className='fab fa-github'></i>
                </a>
              </li>
              <li>
                <a href={resume} target='_blank' rel='noopener noreferrer'>
                  <p>CV</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='bio'>
          <h3>"Somewhere Something Incredible Is Waiting To Be Known"</h3>
          <p>
            Hi! I am Ajayender, A Self-taught Web Developer. Always on the
            lookout for new horizons waiting to be discovered. And learning new
            skills along the way.
          </p>
          <p>
            Currently Interested in working with React, good with HTML, CSS, JS
            and always eager to learn new technologies and best practices. Also,
            working on getting better with Node, Express, MongoDB, Responsive
            Web Design and UI/UX Design.
          </p>
          <p>
            I enjoy playing video-games, watching good movies and anime in my
            free time. I occasionally enjoy reading fiction and non-fiction
            both.
          </p>
          <p>
            Check out my portfolio, if you are really Interested, head over to
            the contact area and shoot me an email. Would love hearing about
            interests or work.
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
