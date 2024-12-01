import React, {useState} from 'react'
import {Slider, SliderProps} from '@mui/material'
import './style.css'


const SuperRange: React.FC<SliderProps> = (props) => {

    return (
        <Slider
            // sx={{ // стили для слайдера // пишет студент
            //
            // }}

            // отдаём слайдеру пропсы если они есть (value например там внутри)
            {...props}
        />
    )
}


export default SuperRange
