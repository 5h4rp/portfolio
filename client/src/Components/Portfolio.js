import React from 'react';

const Portfolio = () => {
  return (
    <main className='portfolio'>
      <section>
        <div className='skills'>
          <h2>Skills</h2>
          <ul>
            <li>
              <i className='fab fa-js-square'></i>
              <h3>JavaScript</h3>
              <p>ES6, Basic Algorithm Scripting and Data Structures</p>
            </li>
            <li>
              <i className='fab fa-node'></i>
              <h3>Node</h3>
              <p>Express, JSON Web Token, REST API</p>
            </li>
            <li>
              <i className='fab fa-react'></i>
              <h3>React</h3>
              <p>Redux, JSX</p>
            </li>
            <li>
              <i className='fab fa-python'></i>
              <h3>Python</h3>
              <p>
                Numpy, Pandas, Basic Algorithm Scripting and Data Structures
              </p>
            </li>
            <li>
              <i className='fab fa-html5'></i>
              <h3>HTML5</h3>
              <p>Semantic, Responsive and Accessible Coding</p>
            </li>
            <li>
              <i className='fab fa-css3-alt'></i>
              <h3>CSS</h3>
              <p>SASS</p>
            </li>
            <li>
              <i className='fab fa-git'></i>
              <h3>Git</h3>
              <p>Version Control</p>
            </li>
            <li>
              <i className='fas fa-database'></i>
              <h3>Databases</h3>
              <p>MongoDB, PL/SQL</p>
            </li>
          </ul>
        </div>
        <div className='exp'>
          <h2>Experience</h2>
          <div className='first-exp'>
            <h3>Asst. Systems Engineer</h3>
            <h4>Tata Consultancy Services</h4>
            <h5>Jan 2019 - Jan 2020</h5>
            <ul>
              <li>Worked with Java, PL/SQL, UNIX based applications.</li>
              <li>
                Worked on automation of tasks using python and various Robotic
                Process Automation tools.
              </li>
              <li>
                Worked on teams which involved directly Interacting with the
                clients and understanding their needs and translating them to
                technical solutions.
              </li>
              <li>
                Worked proactively to address different technical project
                requirements
              </li>
            </ul>
          </div>
        </div>
        <div className='edu'>
          <h2>Education</h2>
          <div className='clg'>
            <h3>Bachelor of Technology | Aerospace Engineering</h3>
            <h4>University of Petroleum and Energy Studies</h4>
            <ul>
              <li>
                Worked on Self Healing properties of shape memory polymers for
                use in more serviceable Aircraft components.
              </li>
              <li>
                4 weeks Internship project under Indian Air force, 5 BRD,
                Coimbatore
              </li>
            </ul>
          </div>
        </div>
        <div className='extra'>
          <h2>Extracurricular Achievements and Skills</h2>
          <div className='list'>
            <ul>
              <li>Secured 96.78 percentile in CAT 2017 Exam</li>
              <li>Scored 97.84 percentile in eLitmus pH Test</li>
              <li>Led Team to 2nd Place in Gaming Tournament in college</li>
              <li>Good analytical and problem solving skills</li>
              <li>Self learning and good time management skills</li>
              <li>
                Known as a Team Player, self-starter and quick at adopting to
                newer technologies and skills
              </li>
            </ul>
          </div>
        </div>
        <div className='interests'>
          <h2>Interests and Hobbies</h2>
          <div className='list'>
            <ul>
              <li>Reading fiction and non-fiction both</li>
              <li>Video Games - Dota2, AOE2:DE, Destiny2</li>
              <li>Listening to podcasts about new upcoming Science and Tech</li>
              <li>Machine Learning and AI</li>
              <li>UI/UX Design and Game Design</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
