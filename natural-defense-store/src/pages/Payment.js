import { Grid3x3TwoTone, SoapOutlined } from "@mui/icons-material"
import { Button, Grid, Typography, FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { Box, width } from "@mui/system"
import React, { useState, useEffect } from "react"
import FormControlWrapper from "../CustomHooks/FormControlWrapper"
import { useSelector } from "react-redux"
import cartReducer from "../Redux/Cart/cart.reducers"
import states from '../utils/StateOptions'
import { CardElement } from "@stripe/react-stripe-js"
import { PaymentElement } from "@stripe/react-stripe-js"
import { useElements } from "@stripe/react-stripe-js"
import { apiInstance } from "../utils"

const mapState = ({cartData}) => ({
    cart: cartData.cartItems
})


const Payment = () => {

    const initialAddress = {
        line1: '',
        line2: '',
        city: '',
        state: '',
        zipCode: ''
    }

    const cart = useSelector(mapState)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [CCV, setCCV] = useState('')
    const [date, setDate] = useState('')
    const [address, setAddress] = useState({...initialAddress})
    const elements = useElements()
    let line_items = []
    const [redirect, setRedirect ]= useState('')
    

    const getAddress = (event) => {
        const { name, value } = event.target
        setAddress({
            ...address,
            [name]: value
        })
    }

    const getState = (event) => {
        console.log(event.target.value)
        
        address.state = event.target.value
    }

    console.log('Address = ' + Object.values(address))

    const getFirstName = (event) => {
        let val = event.target.value
        setFirstName(val)
        // setPasswordColor('white');
        // setError(false)
    }

    const getLastName = (event) => {
        let val = event.target.value
        setLastName(val)
    }

    const getCardNumber = (event) => {
        let val = event.target.value
        setCardNumber(val)
    }

    const getCCV = (event) => {
        let val = event.target.value
        setCCV(val)
    }

    const getDate = event => {
        let val = event.target.value
        setDate(val)
    }

    const handleSubmit = () => {
        const cardElement = elements.getElement('card')

        // if(
        //     !address.city || !address.city || !address.state || !address.zipCode
        // ){ return }
        
        apiInstance.post('/payments', {lineItems: line_items}).then((response) => {console.log(response.data.urlRedirect); (window.location.href = response.data.urlRedirect)})
    }

    const orderTotal = cart.cart.reduce((total, item) => total + (item.quantity * item.price), 0)

    // console.log(`First Name: ${firstName} \nLast Name: ${lastName} \nCard Number: ${cardNumber} \nCCV: ${CCV} \nAddress Line 1: ${address.line1} \nAddress Line 2: ${address.line2} \nAddress City: ${address.city} \nAddress State: ${address.state} \nAddress Zip Code: ${address.zipCode}`)
    cart.cart.map((item, index) => {
        let temp = {
            price_data: {
              currency: 'usd',
              product_data: {
                name: `${item.productName} - ${item.size} `
              },
              unit_amount: item.price * 100,
            },
            quantity: item.quantity,
          }
              console.log(temp)
        line_items.push(temp)
        console.log(line_items)
    })

    // {
    //     price_data: {
    //         currency: 'usd',
    //         product_data: {
    //             name: 'Berry Cleansing',
    //             size: 'Kids 120oz'
    //         },
    //         unit_amount: 349
    //     },
    //     quantity: 1
    // },
    // {
    // price_dat: {
    //     currenc: "usd",
    //     product_dat: {
    //         nam: "Berry Cleansing",
    //         siz: "Large 32oz"
    //         },
    //     unit_amoun: 899
    //     },
    // quantit: 1
    // },
    // {
    //     price_data: {
    //         currency: "usd",
    //         product_data: {
    //             name: "Mango Madness ",
    //             size: "Medium 24oz"
    //         },
    //         unit_amount: 699
    //     },
    //     quantity: 3
    // },
    // {
    //     price_data: {
    //         currency: "usd",
    //         product_data: {
    //             name: "Healthy Classic",
    //             size: "Small 20oz"
    //         },
    //         unit_amount: 599
    //     },
    //     quantity: 3
    // }
    // {
    //     price_data: {
    //       currency: 'usd',
    //       product_data: {
    //         name: 'T-shirt',
    //       },
    //       unit_amount: 2000,
    //     },
    //     quantity: 1,
    //   }

    //   {
    //     "productIngredients": [
    //         "Kale",
    //         "Blueberry",
    //         "Strawberry",
    //         "Flax Seed Oil",
    //         "Lemon"
    //     ],
    //     "productCategory": "Ultimate Cleansing",
    //     "productAdminUserUID": "cnL5DtxEbeYd5n7yuVR3Bk8AAww1",
    //     "createdDate": {
    //         "seconds": 1649341308,
    //         "nanoseconds": 495000000
    //     },
    //     "productImageUrl": "uyjhg",
    //     "productName": "Berry Cleansing",
    //     "documentID": "Y5WYAanYCgYdesw2mFhy",
    //     "size": "Medium 24oz",
    //     "price": 6.99,
    //     "quantity": 2
    // }

    const textFieldStyle = {
        width: '100%'
    }
    const configCardElement = {
        iconStyle: 'solid',
        style: {
            base: {
                iconColor: '#c4f0ff',
                color: '#fff',
                fontWeight: 500,
                fontSize: '16px'
            }
        },
    }
    return (
        <>
            <Grid container justifyContent={'center'}>
            <Grid container rowSpacing={3} p={3} mt={3} justifyContent={'space-around'} sx={{ width:'100%'}}>
                <Typography variant="h4">Payment Details</Typography>
                <Grid container item columnSpacing={3}  justifyContent={'center'} sx={{width:'900px'}}>
                    
                    <Grid item sx={{width:'50%'}}>
                        <FormControlWrapper
                        formControlStyle={textFieldStyle}
                        textFieldType='text'
                        hint='First Name'
                        value={firstName}
                        handleChange={getFirstName}/>
                    </Grid>
                    <Grid item sx={{width:'50%'}}>
                        <FormControlWrapper
                        formControlStyle={textFieldStyle}
                        textFieldType='text'
                        hint='Last Name'
                        value={lastName}
                        handleChange = {getLastName}/>
                    </Grid>
                </Grid>
                <Grid container item rowSpacing={1} columnSpacing={3}  justifyContent={'space-around'} sx={{width:'900px'}}>
                    <Grid item sx={{width:'100%'}}>
                        <FormControlWrapper
                            formControlStyle={textFieldStyle}
                            textFieldType='text'
                            hint='Line 1'
                            value={address.line1}
                            handleChange={event => getAddress(event)}
                            name='line1'/>
                    </Grid>
                     <Grid item sx={{width:'100%'}}>
                        <FormControlWrapper
                            formControlStyle={textFieldStyle}
                            textFieldType='text'
                            hint='Line 2'
                            value={address.line2}
                            handleChange={event => getAddress(event)}
                            name='line2'/>
                    </Grid>
                    <Grid item >
                        <FormControlWrapper
                            textFieldType='text'
                            hint='City'
                            value={address.city}
                            handleChange={event => getAddress(event)}
                            name='city'/>
                    </Grid>
                    <Grid item >
                        <FormControl sx={{width:'300px'}}>
                            <InputLabel id="demo-simple-select-label">State</InputLabel>
                            <Select
                            value={address.state}
                            label="State"
                            onChange={getState}
                            >
                            {Object.keys(states).map((state, index) => {
                                return (<MenuItem key={index} value={states[state]}>{state}</MenuItem>)
                            })}
                            </Select>
                        </FormControl>
                        {/* <FormControlWrapper
                            textFieldType='text'
                            hint='State'
                            value={address.state}
                            handleChange={event => getAddress(event)}
                            name='state'/> */}
                    </Grid>
                    <Grid item >
                        <FormControlWrapper
                            textFieldType='text'
                            hint='Zip Code'
                            value={address.zipCode}
                            handleChange={event => getAddress(event)}
                            name='zipCode'/>
                    </Grid>
                    <Grid item alignSelf={'flex-start'}>
                        <FormControlWrapper
                        textFieldType='text'
                        hint='Card Number'
                        value={cardNumber}
                        handleChange={getCardNumber}/>
                    </Grid>
                    <Grid item >
                        <FormControlWrapper
                            textFieldType='text'
                            hint='CCV'
                            value={CCV}
                            handleChange={getCCV}/>
                    </Grid>
                    <Grid item >
                        <FormControlWrapper
                            textFieldType='text'
                            hint='CCV'
                            value={CCV}
                            handleChange={getDate}/>
                    </Grid>
                    
                </Grid>
            </Grid>
        </Grid>
        <div style={{width:900, marginLeft:'350px'}}>
            <CardElement options={configCardElement}/>
        </div>
        <Grid container item  justifyContent={'center'}>
                    <Button onClick={handleSubmit} sx={{backgroundColor: 'black', color:'white'}}>
                        Submit Order
                    </Button> 
                </Grid>
                <Typography variant="h3">TOTAL: {orderTotal}</Typography>
        </>
    )
}

// <Grid item>
//                 <FormControlWrapper 
//                     formControlStyle = {textFieldStyle}
//                     inputLabelStyle = {{color:emailColor}}
//                     textFieldType = 'email'
//                     hint = 'Email'
//                     value = {email}
//                     handleChange = {getEmail}
//                 />
//             </Grid>
//             <Grid item>
//                 <FormControlWrapper 
//                     formControlStyle = {textFieldStyle}
//                     inputLabelStyle = {{color:passwordColor}}
//                     textFieldType = 'password'
//                     hint = 'Password'
//                     value = {password}
//                     handleChange = {getPassword}
//                 />
//             </Grid>
//             <Grid item sm={12}>
//                 <Button sx={bg} onClick={(formSubmit)}>
//                     Login
//                 </Button>
//             </Grid>
//             <Link to='/password-reset'>
//                 Forgot Password?
//             </Link>

export default Payment