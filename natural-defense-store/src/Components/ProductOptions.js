import React, { useState } from "react";
import { Box, Grid, Paper, Button, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import Select from '@mui/material/Select';



export default function ProductOptions(){

    const [expandedPanel, setExpandedPanel] = useState(false)

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    console.log({ ...event, isExpanded });
    setExpandedPanel(isExpanded ? panel : false);
  };
    return(
        <Accordion expanded={expandedPanel === 'panel1'} onChange={handleAccordionChange('panel1')}>
            <AccordionSummary expandIcon={<ExpandMore/>}>
                Size
            </AccordionSummary>
            <AccordionDetails>
                <Button sx={{display:'block', width:'100%', textAlign:'center'}}>Large</Button>
                <Button sx={{display:'block', width:'100%', textAlign:'center'}}>Medium</Button>
                <Button sx={{display:'block', width:'100%', textAlign:'center'}}>Small</Button>
            </AccordionDetails>
        </Accordion> 
    )
}