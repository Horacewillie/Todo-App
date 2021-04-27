import React from 'react'
import {useState} from 'react'

const Form = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) =>{
        e.preventDefault();
    
        if(!text){
            alert("Please provide a valid text")
            return
        }
    
        onAdd({text, reminder})
    
        setText('')
        setReminder(false)
    
    }
    return (
        <form action="" onSubmit = {onSubmit} >
            <input 
                type="text" 
                placeholder="Enter Task" 
                value = {text}
                onChange = {(e) => setText(e.target.value)}
            />
            <div className="check" >
                <label> Set Reminder</label>
                <input 
                 type="checkbox"
                 checked = {reminder}
                 value ={reminder}
                 onChange = {(e) => setReminder
                    (e.target.checked)}

                />
            </div>
            <div>
                <button className ="btn">Save Task</button>
            </div>
        </form>
    )
}

export default Form
