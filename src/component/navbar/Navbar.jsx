import './navbar.css'
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
  return (
   <>
    <div className='navbar'>
      <div className="wrapper">
        <div className="left">
          <a href="#home" className="logo"><h2>ARIVU</h2></a>
        </div>
        <div className="rightTop">
          <a href="#home">Home</a>
          <a href="#project">About</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
        <div className='burggerMenu'>
          <MenuIcon fontSize='large'/>
        </div>
      </div >
    </div>
    </>
  )
}
