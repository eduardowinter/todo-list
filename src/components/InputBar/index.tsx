import React from 'react'

import { PlusCircle } from 'phosphor-react'

interface InputBarProps {
  handleCreateNewTodo: React.FormEventHandler<HTMLFormElement>
}

export function InputBar({ handleCreateNewTodo }: InputBarProps) {
  return (
    <form onSubmit={handleCreateNewTodo} className="add-new-todo">
      <input
        type="text"
        id="description"
        name="description"
        placeholder="Insert a new task here ..."
      />
      <button type="submit" className="create-button">
        Create
        <PlusCircle className="plus-circle" size={16} />
      </button>
    </form>
  )
}
