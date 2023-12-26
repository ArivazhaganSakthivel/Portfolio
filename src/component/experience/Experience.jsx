import './experience.css'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';
import HomeRepairServiceOutlinedIcon from '@mui/icons-material/HomeRepairServiceOutlined';
import SchoolIcon from '@mui/icons-material/School';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import Content from './Content';
import ComputerIcon from '@mui/icons-material/Computer';


export default function Experience() {

  const[value, SetValue] = useState(1);

  function handleChange(e, nv) {
        SetValue(nv);
  }
  return (
    <div className='experience' id='experience'>
      <div className='top'>
      <h2>Experience</h2>
      <p>Deatails availed</p>
      </div>
      <div className="container">
        <div className="firstPart">
          <div className="side">
          </div>
          <div className="tbs">
           <div className="ss">
           <Tabs
            orientation="vertical"
            variant="scrollable"
            indicatorColor="secondary"
          textColor="inherit"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 2, borderColor: 'divider' }}
          >
            <Tab icon={<SchoolIcon />} iconPosition="start" label="Education" value={1} sx={{display:'flex', justifyContent:'start'}}/>
            <Tab icon={<HomeRepairServiceOutlinedIcon />} iconPosition="start" label="Work History" value={2} sx={{display:'flex', justifyContent:'start'}}/>
            <Tab icon={<ComputerIcon />} iconPosition="start" label="Programing" value={3} sx={{display:'flex', justifyContent:'start'}}/>
            <Tab icon={<ViewInArIcon />} iconPosition="start" label="Projects" value={4} sx={{display:'flex', justifyContent:'start'}}/>
            <Tab icon={<ColorLensIcon />} iconPosition="start" label="Interst" value={5} sx={{display:'flex', justifyContent:'start'}}/>
          </Tabs>
           </div>
          </div>
        </div>
        <div className="secondPart">
          <Content value={value} />
        </div>
      </div>
    </div>
  )
}
