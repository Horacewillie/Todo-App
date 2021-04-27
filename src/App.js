import React from 'react'
import { useState } from 'react'
import Title from './Components/Title'
import Form from './Components/Form'
import Tasks from './Components/Tasks'


const App = () => {
  const [showAddTask, setShowAddTask] =useState(false)
  const [tasks, setTasks] =useState([
    {
        id:1,
        text: 'Meeting in the early hours',
        day: 'Feb 6th at 1:30pm',
        reminder: true
    },
    {
        id:2,
        text: 'Meeting in the early hours',
        day: 'Feb 7th at 1:30pm',
        reminder: false
    },
    {
        id:3,
        text: 'Meeting in the early hours',
        day: 'Feb 8th at 1:30pm',
        reminder: true
    }
])

  //Delete Task 

  const deleteTask = (id) =>{
    setTasks(tasks.filter((task) => task.id !== id ))
  }

  //Toggle Reminder
  const toggleReminder = (id) =>{
    setTasks(tasks.map((task) => {
      if(task.id === id){
        task.reminder = !task.reminder
        return task
      }
      return task
      
      
    }))
  }

  // const toggleReminder = (id) =>{
  //   setTasks(tasks.map((task) => task.id === id ?
  //   { ...task, reminder: !task.reminder } : task))
  // }
  
  //Addtask to Tasklist
  const addTask = (task) => {
    const id = Math.floor(Math.random() *1000) + 1
    
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  
  return (
    <div className="container">
      <Title  
        title ='TODOLIST'
        onShowAdd = {() => setShowAddTask(!showAddTask)}
        showAdd ={showAddTask}
      />
      {showAddTask && <Form onAdd = {addTask}/>}
      {tasks.length > 0 ?
      <Tasks 
        tasks = {tasks} 
        onDelete = {deleteTask} 
        onToggle ={toggleReminder}
      /> 
      :
      "No Task To Display"}
    </div>
  )
}

export default App

