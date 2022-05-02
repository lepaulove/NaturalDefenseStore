import React from "react"
import { FormControl, useFormControl, InputLabel, Input, FormHelperText, TextField, Button, Paper } from "@mui/material";


const FormControlWrapper = props => {

    return (
        <FormControl sx={props.formControlStyle}>
            {/* <InputLabel htmlFor="my-input" sx={props.inputLabelStyle} >
                {props.value ? ' ' : props.hint}
            </InputLabel> */}
            <TextField  type={props.textFieldType} 
                        value={props.value} 
                        onChange={props.handleChange} 
                        label={props.hint}
                        inputRef={props.clear}
                        name={props.name}/>
            {/* <FormHelperText id="my-helper-text">
                We'll never share your email.
            </FormHelperText> */}
        </FormControl>
    )
}

export default FormControlWrapper