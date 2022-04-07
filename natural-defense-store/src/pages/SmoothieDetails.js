import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Grid, Paper, Typography, Button, Accordion, AccordionSummary, AccordionDetails, Divider } from "@mui/material";
import { ExpandMore } from "@mui/icons-material"


const mapProductState = ({ productsData }) => ({
    product: productsData.product
})

const mapIngredientState = ({ productsData }) => ({
    ingredients: productsData.ingredients
})

export default function SmoothieDetails(){

    const { product } = useSelector(mapProductState)
    const ingredientList = useSelector(mapIngredientState)
    const userSelection = new Set()
    const [size, setSize] = useState('Pick Your Size')
    const [price, setPrice] = useState(0.00)
    const { ingredients } = ingredientList

    const handleChange = (e) => {
        if(!e.target.checked && userSelection.has(e.target.value)){
            userSelection.delete(e.target.value)
            console.log(userSelection)
            return
        }
        if(e.target.checked && !userSelection.has(e.target.value)){
            userSelection.add(e.target.value)
            console.log(userSelection)
            return
        }
    }
    
    return(
        <Grid container justifyContent={'center'} >
            <Typography variant="h2">Cutomize Your Smoothie</Typography>
            <Grid item xs={9}>
                <Paper sx={{pl:4, pt:1, pr:1}}>
                    <Typography variant='h3'>{product.productName}</Typography>
                    <Divider/>
                    <Typography variant='h6'>Price ${price}</Typography>
                    <Divider/>
                    <Accordion >
                        <AccordionSummary expandIcon={<ExpandMore />}>{size}</AccordionSummary>
                        <AccordionDetails>
                            <Button onClick={() => { setSize('Kids 120oz'); setPrice(3.49)}}>Kids 12oz</Button><br></br>
                            <Button onClick={() => { setSize('Small 20oz'); setPrice(5.99)}}>Small 20oz</Button>
                            <Button onClick={() => { setSize('Medium 24oz'); setPrice(6.99)}}>Medium 24oz</Button>
                            <Button onClick={() => { setSize('Large 32oz'); setPrice(8.99)}}>Large 32oz</Button>
                        </AccordionDetails>
                    </Accordion>
                    <Divider/>
                    <Typography variant='h6' sx={{pt:'1'}}>Ingrediants</Typography>
                    <FormGroup>
                        {product.productIngredients.map((ingrediant) => {
                            userSelection.add(ingrediant)
                            return <FormControlLabel control={<Checkbox defaultChecked />} label={ingrediant} value={ingrediant} onChange={handleChange}/>
                        })}
                    </FormGroup>
                    <Divider/>
                    <Typography variant='h6' sx={{pt:'1'}}>Extras (add-ons)</Typography>
                    <FormGroup>
                        {ingredients.map((ingrediant) => {
                            if(product.productIngredients.includes(ingrediant)) return
                            return <FormControlLabel control={<Checkbox />} label={ingrediant} value={ingrediant} onChange={handleChange}/>
                        })}
                    </FormGroup>
                </Paper>
            </Grid>
        </Grid>
    )
}