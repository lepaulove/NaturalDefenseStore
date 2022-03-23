import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProductList from '../Components/ProductList';
import { useMediaQuery } from '@mui/material';

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
        <Box >
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
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const isXSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const categories = ['Nutritional', 'Performance', 'Tropical', 'Cleansing', 'ND Special', 'Blend Your Own']

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper', width: '100%' }}>
      <AppBar position="static" sx={{bgcolor:'#46dc56', color:'#fa4720'}}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant={isXSmallScreen ? "scrollable" : "fullWidth"} 
          // variant='scrollable'
          scrollButtons="auto"
          TabIndicatorProps={{
            sx: {
                backgroundColor: "#fa4720",
                height: "5px"
              }
            }}
          textColor="inherit"
        >
        {/* <Tabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{
          sx: {
              backgroundColor: "#fa4720",
              height: "5px"
            }
          }}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      > */}
          {categories.map((category, index) => {
            return(
              <Tab label={category} sx={{width:'10px', fontSize:{xs: '.5rem', sm: '1rem'}}}{...a11yProps(index)} />
            )
          })}
          {/* <Tab label="Deals" sx={{fontSize:'1.1rem'}}{...a11yProps(0)} />  
          <Tab label="Featured" sx={{fontSize:'1.1rem'}} {...a11yProps(1)} />
          <Tab label="Immune Defense" sx={{fontSize:'1.1rem'}} {...a11yProps(2)} />
          <Tab label="Recovery" sx={{fontSize:'1.1rem'}} {...a11yProps(3)} /> */}
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        {categories.map((category, index) => {
            return(
              <TabPanel value={value} index={index} dir={theme.direction} sx={{display:'flex', justifyContent:'center'}}>
                {category == 'Nutritional' ? <ProductList productType='Smoothie'/> : category}
              </TabPanel>
            )
          })}
        
        {/* <TabPanel value={value} index={1} dir={theme.direction}>
          <ProductList />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Immune Defense
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          Recovery
        </TabPanel> */}
      </SwipeableViews>
    </Box>
  );
}
