// ** Jalax ** //

import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chair2 from './images/Chair2.jpeg';
import Chair3 from './images/Chair3.jpeg';
import Chair4 from './images/Chair4.jpeg';
import Chair5 from './images/Chair5.jpeg';
import Chair6 from './images/Chair6.jpeg';
import './Layout.css';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p:5,height:700,width:200,margin:0}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='mmmainBox'> 
      <div>
        <h1>TABLE WIZARD</h1>
      <Box className='ssubbox'
      >
        
        <Tabs className='tab'
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          
          aria-label="Vertical tabs example"
          
          sx={{ borderRight: 5, borderColor: 'divider', margin:'15px' }}
        >
          <Tab label="Table with 2 chair"{...a11yProps(0)}/>
          <Tab label="Table with 3 chair"{...a11yProps(1)}/>
          <Tab label="Table with 4 chair"{...a11yProps(2)}/>
          <Tab label="Table with 5 chair"{...a11yProps(3)}/>
          <Tab label="Table with 6 chair"{...a11yProps(4)}/>
        
        </Tabs>
        <TabPanel value={value} index={0}>
          <img className='Tabpanel'src={Chair2} alt="img"/> 
          
        </TabPanel>
        <TabPanel   value={value} index={1}>
          <img className='Tabpanel'src={Chair3} alt="img" 
        />
        </TabPanel>
        <TabPanel  value={value} index={2}>
          <img className='Tabpanel' src={Chair4} alt="img" 
          />
        </TabPanel>
        <TabPanel  value={value} index={3}>
          <img className='Tabpanel' src={Chair5} alt="img" 
          />
        </TabPanel>
        <TabPanel  value={value} index={4}
        >
          <img className='Tabpanel' src={Chair6} alt="img" 
          />
          
        </TabPanel>
  
        <button className='button'
        > confirm </button>
        </Box>
      </div>

    </div>
)


}


