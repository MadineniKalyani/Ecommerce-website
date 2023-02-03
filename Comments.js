import {
    Button,
    Card,TextField
    
  } from "@mui/material"
  import { useState } from "react"
  
  function Comment() {
    const [userInput, setUserInput] = useState("")
  
    const [todoList, setTodoList] = useState([])
  
    const addItem = e => {
      e.preventDefault()
      const trimmedUserInput = userInput.trim()
      if (trimmedUserInput) {
        setTodoList(existingItems => [
          ...existingItems,
          { name: trimmedUserInput, finished: false },
        ])
        setUserInput("")
      }
    }
  
    return (
      
          <>
          <form onSubmit={addItem}>
            <p fill={true} vertical={false}>
              <TextField
                placeholder="Add a task..."
                value={userInput}
                onChange={e => setUserInput(e.target.value)}
              />
              <Button type="submit" intent="primary">
                Add
              </Button>
            </p>
          </form>
          <div className="items-list">
            {todoList.map((item, index) => (
              <p key={index + item.name} large minimal multiline>
                <span>{item.name}</span>
              </p>
            ))}
          </div>
          </>
    )
  }
  
  export default Comment