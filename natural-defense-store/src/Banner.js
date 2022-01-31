import React from 'react'
import styled from 'styled-components'
import banner from './images/banner-image.png'
import Image from 'mui-image'

const Img = styled(Image)({
    maxHeight: 300
})
    


function Banner(){
    return(
        <Img src={banner}/>
)}

export default Banner;