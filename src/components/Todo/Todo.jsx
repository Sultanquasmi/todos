import React from 'react'

function Todo({text , isFinished}) {
  return (
    <div>
    <input type="checkbox" checked={isFinished} />
    <span>{text}</span>
    <button>Edit</button>
    <button>Delete</button>
    </div>
  )
}

export default Todo