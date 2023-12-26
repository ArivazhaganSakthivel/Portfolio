import './contact.css'
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import SendIcon from '@mui/icons-material/Send';
import { Button, TextField } from '@mui/material';

export default function contact() {
  return (
    <div className="contact" id='contact'>
      <div className="container">
        <div className="box">
          <div className='firstPart'>
            <div className="collection">
              <div>
                <LocationOnRoundedIcon /><span>Address</span> <p>54, Pillayar Kovil Street,
                  Othaveedu, Adambar, Nannilam,
                  Thiruvarur(610-105)
                </p></div>
              <div>
                <div><MailIcon /><span>Email</span></div>
                <p>arivazhaganskl@gmail.com</p>
              </div>
              <div>
                <div><CallIcon /><span>Call</span></div>
                <p>+91 9384148905</p>
              </div>
            </div>
          </div>
          <div className='secondPart'>
            <div className="boxCon">
              <form action="">
                <h2>Send Mail</h2>
                <TextField fullWidth id="standard-basic" label="Full Name" variant="standard" />
                <TextField fullWidth id="standard-basic" label="Email" variant="standard" />
                <TextField fullWidth id="standard-basic" label="Type Massage..." variant="standard" />
                <Button variant="contained" endIcon={<SendIcon />}>Send </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
