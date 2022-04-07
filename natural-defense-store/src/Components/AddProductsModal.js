import React, { useState, useEffect } from "react";
import { Stack, Container, Box, Grid, Button, Dialog, DialogTitle, FormControl, InputLabel, TextField, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import FormControlWrapper from "../CustomHooks/FormControlWrapper";
import  { useDispatch } from 'react-redux'
import { addProductStart } from "../Redux/Products/products.actions";


const AddSmoothiesModal = props => {

    const { onClose, selectedValue, open } = props;
    const [productCategory, setProductCategory] = useState('Product Type')
    const [productName, setProductName] = useState()
    const [productImageUrl, setProductImageUrl] = useState()
    const [productIngredients, setProductIngredients] = useState([])
    const [change, setChange] = useState(true)
    let ingrediant = ''
    const dispatch = useDispatch()
    const textInput = React.useRef(null)

    const getProductName = event =>{
        let val = event.target.value
        setProductName(val)
    }

    const getProductCategory = event =>{
        let val = event.target.value
        setProductCategory(val)
    }

    useEffect(() => {

    }, [productIngredients])

    const getProductImageUrl = event =>{
        let val = event.target.value
        setProductImageUrl(val)
    }

    const getProductIngredients = event =>{
        // let temp = productIngredients
        ingrediant = event.target.value
        // temp.push(val)
        // ingrediant = val
        // console.log(ingrediant)
        // console.log(val)
    }

    // const setType = (type) => {
    //     setProductType(type)
    //     setExpandedPanel(false)
    // }
  
    const handleClose = () => {
      onClose(selectedValue);
    };

    const resetForm = () => {
        setProductIngredients([])
        // setProductPrice('')
        handleClose()
    }

    const formSubmit = () =>{
        dispatch(addProductStart({
            productCategory,
            productName,
            productImageUrl,
            productIngredients
            // productPrice
        }))
        console.log(productCategory)
        console.log(productName)
        console.log(productImageUrl)
        // console.log(productPrice)
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
            <DialogTitle container direction='row'>Add Smoothie</DialogTitle>
            <Stack 
              spacing={2} container sx={{
              display: 'flex',
              flexDirection: 'column',
              m: '10px',
              width: 'fit-content',
              justifyContent:'center',
            }}>
                <Grid item xs={12}>
                </Grid>
                <Grid item xs={12}>
                    <FormControlWrapper 
                        formControlStyle={textFieldStyle} 
                        hint='Product Category'
                        handleChange={getProductCategory}/>
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
                <Grid item xs={12} sx={{display:'flex', flexDirection:'column'}}>
                    <FormControlWrapper
                    formControlStyle={textFieldStyle}
                    hint='Ingredient'
                    handleChange={getProductIngredients}
                    clear={textInput}/>
                    <Button onClick={() =>{
                        productIngredients.push(ingrediant)
                        textInput.current.value = ""
                        ingrediant = ''
                        setChange(!change)
                    }} sx={{width:'25%', background:'black', color:'whitesmoke' }}>Add Ingredient</Button>   
                </Grid>
                <Grid>Ingredients
                    <ul>
                        {productIngredients.map((ingrediant, index) => {
                        return(<li>{ingrediant}</li>)
                        })}
                    </ul>
                </Grid>
                <Grid item xs={12}>
                    <Button onClick={formSubmit} sx={{width:'100%', background:'black', color:'whitesmoke'}}>Click Me!</Button>  
                </Grid>
            </Stack>    
        </Dialog>
    );
  }

export default AddSmoothiesModal