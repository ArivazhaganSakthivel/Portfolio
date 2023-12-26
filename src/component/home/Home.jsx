import './home.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Button } from '@mui/material';

export default function Home() {
  return (
    <div className="home" id='home'>
      <div className="container">
        <div className="top">
        <div className="left">
          <div className="leftInner">
            <div className="icon">
              <a href="https://github.com/ArivazhaganSakthivel"><GitHubIcon fontSize='large' /></a>
              <a href="https://www.linkedin.com/in/arivazhagansathivel/"><LinkedInIcon fontSize='large' /></a>
              <a href="https://www.instagram.com/arivazhagan_aj/"><InstagramIcon fontSize='large' /></a>
              <a href="https://www.facebook.com/search/top/?q"><FacebookIcon fontSize='large' /></a>
            </div>
            <h2>Hello, I'M <span className="name">Arivazhagan</span></h2>
            <h1>Full Stack Developer</h1>
            <p>Welcome to my portfolio! My mission is to combine aesthetics with functionality, creating designs that not only look great but also serve a purpose.</p>
            <div className="but">
              <a href="#contact"><Button variant="outlined" >Hire me</Button></a>
              <a href="./image/resume.pdf" download><Button variant="contained" color='warning' disableElevation>Download Resume</Button></a>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="rightInner">
            <div className='forImage'>
              <img src="./image/ajay.jpg" alt="" />
            </div>
          </div>
        </div>
        </div>
        <div className="buttom">
          <div className="box">
         
          </div>
      </div>
      </div>
    </div>
  )
}
