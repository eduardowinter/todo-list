import React from 'react'

import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import { Trash } from 'phosphor-react'

import { Placeholder } from '../Placeholder'

interface Todos {
  id: string
  description: string
  isChecked: boolean
}

interface TodosTableProps {
  todos: Todos[]
  count: number
  handleCheck: React.MouseEventHandler<HTMLDivElement>
  handleDelete: React.MouseEventHandler<HTMLDivElement>
}

export function TodosTable({
  todos,
  count,
  handleCheck,
  handleDelete,
}: TodosTableProps) {
  if (count === 0) {
    return <Placeholder />
  } else {
    return (
      <div className="todo-list">
        <ul>
          {todos.map((todo) => {
            return (
              <li key={todo.id}>
                <div className="todo-card">
                  <div
                    className="todo-check"
                    onClick={handleCheck}
                    id={todo.id}
                  >
                    <Checkbox.Root className="CheckboxRoot">
                      <Checkbox.Indicator className="CheckboxIndicator">
                        <CheckIcon />
                      </Checkbox.Indicator>
                    </Checkbox.Root>
                  </div>
                  <div
                    className="todo-content"
                    aria-checked={todo.isChecked}
                    style={{
                      textDecoration: todo.isChecked ? 'line-through' : 'none',
                    }}
                  >
                    {todo.description}
                  </div>
                  <div>
                    <div
                      className="trash-icon-container"
                      onClick={handleDelete}
                      id={todo.id}
                    >
                      <Trash size={24} />
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
