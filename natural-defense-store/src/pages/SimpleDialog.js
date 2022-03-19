import React, { useState } from "react";
import { Stack, Container, Box, Grid, Button, Dialog, DialogTitle, FormControl, InputLabel, TextField, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import FormControlWrapper from "../CustomHooks/FormControlWrapper";
import  { useDispatch } from 'react-redux'
import { addProductStart } from "../Redux/Products/products.actions";


const SimpleDialog = props => {

    const { onClose, selectedValue, open } = props;
    const [productType, setProductType] = useState('Product Type')
    const [productName, setProductName] = useState()
    const [productImageUrl, setProductImageUrl] = useState()
    const [productPrice, setProductPrice] = useState()
    const dispatch = useDispatch()

    const getProductName = event =>{
        let val = event.target.value
        setProductName(val)
    }

    const getProductImageUrl = event =>{
        let val = event.target.value
        setProductImageUrl(val)
    }

    const getProductPrice = event =>{
        let val = event.target.value
        setProductPrice(val)
    }

    const setType = (type) => {
        setProductType(type)
        setExpandedPanel(false)
    }
  
    const handleClose = () => {
      onClose(selectedValue);
    };

    const resetForm = () => {
        setProductType('Product Type')
        setProductName('')
        setProductImageUrl('')
        setProductPrice('')
        handleClose()
    }

    const formSubmit = () =>{
        dispatch(addProductStart({
            productType,
            productName,
            productImageUrl,
            productPrice
        }))
        console.log(productType)
        console.log(productName)
        console.log(productImageUrl)
        console.log(productPrice)
        resetForm()
    }

    const textFieldStyle = {
        width: '15em',
    }

    const [expandedPanel, setExpandedPanel] = useState(false)

    const handleAccordionChange = (panel) => (event, isExpanded) => {
        console.log({ ...event, isExpanded });
        setExpandedPanel(isExpanded ? panel : false);
    };

  
    return (
        <Dialog onClose={handleClose} maxWidth='lg' fullWidth='xl' open={open} sx={{}}>
            <DialogTitle container direction='row'>Set backup account</DialogTitle>
            <Stack 
              spacing={2} container sx={{
              display: 'flex',
              flexDirection: 'column',
              m: '10px',
              width: 'fit-content',
              justifyContent:'center',
            }}>
                <Grid item xs={12}>
                    <Accordion expanded={expandedPanel === 'panel1'} onChange={handleAccordionChange('panel1')}>
                        <AccordionSummary expandIcon={<ExpandMore/>}>
                            {productType}
                        </AccordionSummary>
                        <AccordionDetails>
                            <Button sx={{display:'block', width:'100%', textAlign:'center'}} onClick={() => setType('Smoothie')}>Smoothie</Button>
                            <Button sx={{display:'block', width:'100%', textAlign:'center'}} onClick={() => setType('Atomy')}>Atomy</Button>
                            <Button sx={{display:'block', width:'100%', textAlign:'center'}} onClick={() => setType('Vitamins')}>Vitamins</Button>
                        </AccordionDetails>
                    </Accordion> 
                </Grid>
                <Grid item xs={12}>
                    <FormControlWrapper 
                        formControlStyle={textFieldStyle} 
                        hint='Product Name'
                        handleChange={getProductName}/>   
                </Grid>
                <Grid item xs={12}>
                    <FormControlWrapper 
                        formControlStyle={textFieldStyle} 
                        hint='Product Image URL'
                        handleChange={getProductImageUrl}/>   
                </Grid>
                <Grid item xs={12}>
                    <FormControlWrapper 
                    formControlStyle={textFieldStyle}
                    hint='Price $$$'
                    handleChange={getProductPrice}/>   
                </Grid>

                <Grid item xs={12}>
                    <Button onClick={formSubmit} sx={{width:'100%', background:'black', color:'whitesmoke'}}>Click Me!</Button>  
                </Grid>
            </Stack>    
        </Dialog>
    );
  }

  export default SimpleDialog