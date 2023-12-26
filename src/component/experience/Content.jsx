import React from 'react'
import '../experience/contents.css'

export default function Content(props) {
  const ajay = props.value;
  return (
    <div>
      {
        ajay === 1 && <div className='education'>
          <h2>🎓 School Days</h2>
          <p>
            HSCC Govt(Boys)Hr Sec School
            Nannilam
            2016 – 2017
          </p>

          <p>SSCL Govt High School
            Achuthamangalam
            2014 – 2015</p>

          <h2>🏫 College Chronicles</h2>
          <p>B.TECH- Information Technology
            EGS Pillay Engineering College
            06/2017 – 06/2021
            Nagapattinam.</p>

          <h2> 📚 Course</h2>
          <p>Full Stack Web Development Course UpGrad Campus Hands-on experience building real-world projects and working collaboratively with a Team of developers.</p>
          </div>

      }
      {
        ajay === 2 && <div>
          <h2>Focus Edumatics Pvt Ltd</h2>
          <h4>Executive Tutor </h4>
          <h4>2022 - Present </h4>
          <div className="param">
          <p>🟠Successfully managed tutoring sessions during night shifts, demonstrating flexibility and dedication to accommodating diverse schedules.</p>
          <p>🟠Implemented efficient time management strategies to balance a high volume of tutoring sessions, ensuring each student received personalized attention.</p>
          <p>🟠Adapted teaching methods to suit the varying learning styles of US students, fostering a positive and inclusive learning environment.</p>
          </div>
        </div>
      }

      {
       ajay === 3 && <div className='skills'>
        <div>
          <h2>Front End:</h2>
          <li>React jS</li>
          <li>Java Script</li>
          <li>HtML</li>
          <li>CSS</li>
        </div>
        <div>
          <h2>Back End:</h2>
          <li>Node jS</li>
          <li>Java</li>
          <li>Express jS</li>
        </div>
        <div>
          <h2>Data Base:</h2>
          <li>Mongo DB</li>
          <li>SQL</li>
        </div>
       </div>

      }


      {
        ajay === 4 && <div className='projects'>
          <div>
          <h3>Blog Website</h3>
          <h4>(HTML, CSS, JavaScript)</h4>
          <p>Developed a responsive blog website using HTML, CSS, and JavaScript.</p>
          <p>Implemented dynamic features such as interactive elements and form validation.</p>
          </div>
          <div>
          <h3>Front-endfor E-commerce Website</h3>
          <h4>(React js, Material Ui)</h4>
          <p>Developed a responsive front-end for an e-commerce platform using React.js.</p>
          <p>Implemented advanced UI components and state management for an enhanced user experience.</p>
          </div>
          <div>
          <h3>Movie Booking Application</h3>
          <h4>(React and Node.js)</h4>
          <p>Developed movie booking application using React for the front end and Node.js for the back end.</p>
          <p>Utilized RESTful APIs to interact with the back-end and manage data flow efficiently.</p>
          </div>
        </div>
      }

      {
        ajay===5 && <div>
          <p>🟠Developing front and backend application using the advance technologies</p>
        </div>
      }

    </div>
  )
}
