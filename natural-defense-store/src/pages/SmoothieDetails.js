import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Grid, Paper, Typography, Button, Accordion, AccordionSummary, AccordionDetails, Divider } from "@mui/material";
import { ExpandMore } from "@mui/icons-material"
import { addProductToCart, updateTotalPrice } from "../Redux/Cart/cart.actions";
import { useDispatch } from "react-redux";


const mapProductState = ({ productsData }) => ({
    product: productsData.product
})

const mapIngredientState = ({ productsData }) => ({
    ingredients: productsData.ingredients
})

export default function SmoothieDetails(){

    const userSelection = new Set()
    const defaultSelection = new Set()
    const { product } = useSelector(mapProductState)
    const { ingredients } = useSelector(mapIngredientState)
    const [size, setSize] = useState('Pick Your Size')
    const [price, setPrice] = useState(0.00)
    const dispatch = useDispatch()
    const handleAddToCart = (smoothie) => {
        console.log('Adding Item...')
        if(!smoothie || size === 'Pick Your Size') return
        dispatch(addProductToCart({...product, size, price}))
        dispatch(updateTotalPrice())
    }

    useEffect(() => {
        product.productIngredients.map((ingredient, index) => {
            defaultSelection.add(ingredient)
        })
    }, [])

    const handleChange = (e) => {

        if(!product.productIngredients.includes(e.target.value)){
            if(!e.target.checked /*&& userSelection.has(e.target.value)*/){
                userSelection.delete(e.target.value)
                setPrice(price - .99)
                console.log(userSelection)
                console.log(defaultSelection)
                return
            }
            if(e.target.checked && !userSelection.has(e.target.value)){
                userSelection.add(e.target.value)
                setPrice(price + .99)
                console.log(userSelection)
                console.log(defaultSelection)
                return
            }
        }
        // if(e.target.checked){
        //     defaultSelection.add(e.target.value)
        //     return
        // }
        // if(!e.target.checked){
        //     defaultSelection.delete(e.target.value)
        //     return
        // }
        e.target.checked ? defaultSelection.add(e.target.value) : defaultSelection.delete(e.target.value)
    }
    
    return(
        <Grid container justifyContent={'center'} >
            <Typography variant="h2">Cutomize Your Smoothie</Typography>
            <Grid item xs={9}>
                <Paper sx={{pl:4, pt:1, pr:1, pb:1}}>
                    <Typography variant='h3'>{product.productName}</Typography>
                    <Divider/>
                    <Typography variant='h6'>Price ${price.toFixed(2)}</Typography>
                    <Divider/>
                    <Accordion sx={{backgroundColor:'lightgrey'}}>
                        <AccordionSummary expandIcon={<ExpandMore />}>{size}</AccordionSummary>
                        <AccordionDetails sx={{display:'flex', flexDirection:'column', justifyContent:'center', backgroundColor:'white'}}>
                            <Button onClick={() => { setSize('Kids 120oz'); setPrice(3.49)}}>Kids 12oz</Button>
                            <Button onClick={() => { setSize('Small 20oz'); setPrice(5.99)}}>Small 20oz</Button>
                            <Button onClick={() => { setSize('Medium 24oz'); setPrice(6.99)}}>Medium 24oz</Button>
                            <Button onClick={() => { setSize('Large 32oz'); setPrice(8.99)}}>Large 32oz</Button>
                        </AccordionDetails>
                    </Accordion>
                    <Divider/>
                    <Typography variant='h6' sx={{pt:'1'}}>Ingrediants</Typography>
                    <FormGroup>
                        {/* {product.productIngredients.map((ingrediant, index) => {
                            // defaultSelection.add(ingrediant)
                            return defaultSelection.has(ingrediant) ? <FormControlLabel key={index} control={<Checkbox defaultChecked />} label={ingrediant} value={ingrediant} onChange={handleChange}/> : <FormControlLabel key={index} control={<Checkbox />} label={ingrediant} value={ingrediant} onChange={handleChange}/>
                        })} */}
                    </FormGroup>
{/****************************Use for when offering users the option to add other ingridients***********************************************************/}
                    {/*<Divider/>
                    <Typography variant='h6' sx={{pt:'1'}}>Extras (add-ons)</Typography>
                     <FormGroup>
                        {ingredients.map((ingrediant, index) => {
                            // if(product.productIngredients.includes(ingrediant)) return
                            return <FormControlLabel key={index} control={<Checkbox />} label={ingrediant} value={ingrediant} onChange={handleChange}/>
                        })}
                    </FormGroup> */}
{/******************************************************************************************************************************************************/}
                    <Button onClick={handleAddToCart} sx={{backgroundColor:'black', color:'whitesmoke', '&:hover':{background: 'darkgrey', color: 'black'}}}>Add Item to Cart</Button>
                </Paper>
            </Grid>
        </Grid>
    )
}