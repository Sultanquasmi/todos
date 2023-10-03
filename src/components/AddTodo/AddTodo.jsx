import React, { useState } from 'react'

function AddTodo({addTodo}) {
    const [addText , setAddText] = useState('')
  return (
    <div>
        <input type="text"
         placeholder='Enter your new task ...'
         onChange={(e)=>setAddText(e.target.value)}
         value={addText}
         />
        <button
        onClick={()=>{
            addTodo(addText)
            setAddText('')
        }}
        >submit</button>

    </div>
  )
}

export default AddTodo