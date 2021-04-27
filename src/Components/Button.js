import React from 'react'

const Button = ({color, text, onClick}) => {
    return <button  onClick = {onClick} className = 'btnsmall' style={{backgroundColor: color}}>{text}</button>
}

export default Button
