import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Atomy from '../pages/Atomy'
import Vitamins from '../pages/Vitamins'
import Order from '../pages/Order'
import Login from '../pages/Login'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ }}>
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

// function a11yProps(index) {
//   return {
//     id: `full-width-tab-${index}`,
//     'aria-controls': `full-width-tabpanel-${index}`,
//   };
// }

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper', width: '100%' }}>
      <AppBar position="static" sx={{bgcolor:'#03C417'}}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label='Home'/>
          <Tab label='Order Smoothie Online'/>
          <Tab label='Atomy Products'/>
          <Tab label='Vitamins & Suppliments'/>
          <Tab label='Login'/>
        </Tabs>
      </AppBar>
      {/* <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      > */}
      <Box>
        <TabPanel value={value} index={0} dir={theme.direction}>
          {/* <Section/> */}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Order/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Atomy/>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <Vitamins/>
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          <Login/>
        </TabPanel>
      </Box>
      {/* </SwipeableViews> */}
    </Box>
  );
}