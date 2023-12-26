import './about.css'

export default function About() {
  return (
    <div className="project" id='project'>
      <div className='top'>
        <div className="contant">
          <h1>About Me</h1>
          <p>Why choose me?</p>
        </div>
      </div>
      <div className="container">
        <div className="left">
          <img src="./image/ajay1.jpg" alt="" width={500} height={500}/>
        </div>
        <div className="right">
          <div className='paras'>
            <p>Hello! I'm Arivazhagan S, a budding tech enthusiast ready to embark on a journey into the exciting realm of software and full-stack development.
            </p>

          </div>
          <div className='points'>
            <h3>Points</h3>
            <p>🌟 Passion for Problem Solving </p>
            <br />
            <p>🚀 Embracing the Learning Curve</p>
            <br />
            <p>🌐 Aspiring Full-Stack Developer </p>
            <br />
            <p>🌈 Eager to Contribute </p>
            <br />
            <p>📚 Lifelong Learner</p>
            <br />
            <p>🟠Let's Connect and Code Together!</p>
          </div>
          <div className="buttom"></div>
        </div>

      </div>
    </div>
  )
}
