import React from 'react'
import Button from './Button'
import PropTypes from 'prop-types'



const Title = ({ onShowAdd, title, showAdd }) => {
    return (
        <header className="header">
            <h2>{title}</h2>
            <Button  color ={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick = {onShowAdd} />
        </header>
    )
}

Headers.defaultProps = {
    title: 'TODOLIST'
}

Headers.propTypes ={
    title: PropTypes.string.isRequired 
}


export default Title
