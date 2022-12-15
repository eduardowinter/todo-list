import React, { useEffect, useState } from 'react'
import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import { v4 as uuidv4 } from 'uuid'

import logo from './assets/logo.svg'
import clipboard from './assets/clipboard.svg'
import './App.css'
import { PlusCircle, Trash } from 'phosphor-react'

interface Todos {
  id: string
  description: string
  isChecked: boolean
}

function App() {
  const todosList: Todos[] = []

  const [todos, setTodos] = useState<Todos[]>(todosList)
  const [count, setCount] = useState(0)
  const [countAccomplished, setCountAccomplished] = useState(0)

  useEffect(() => setCount(todos.length), [todos.length])

  useEffect(
    () =>
      setCountAccomplished(
        todos.filter((todo) => todo.isChecked === true).length,
      ),
    [todos],
  )

  function handleCreateNewTodo(event: React.MouseEvent<HTMLFormElement>) {
    event?.preventDefault()

    const description = event?.currentTarget.description.value

    const newTodo = {
      id: uuidv4(),
      description,
      isChecked: false,
    }

    setTodos([...todos, newTodo])

    event.currentTarget.reset()
  }

  function handleCheck(event: React.MouseEvent<HTMLDivElement>) {
    const id = event?.currentTarget.id

    todos.forEach((todo) => {
      if (id === todo.id) {
        todo.isChecked = !todo.isChecked
      }
    })

    setTodos([...todos])
  }

  function handleDelete(event: React.MouseEvent<HTMLDivElement>) {
    const id = event?.currentTarget.id

    let todoIndex = -1

    todos.forEach((todo) => {
      todoIndex += 1
      if (id === todo.id) {
        todos.splice(todoIndex, 1)
      }
    })

    setTodos([...todos])
  }

  function displayTodos() {
    if (count === 0) {
      return (
        <div className="empty-todo-list-container">
          <div className="empty-todo-list">
            <img src={clipboard} alt="Clipboard Icon" />
            <p>
              <span className="logo react">
                You have no todo&apos;s added yet
              </span>
              <br />
              Create your todo&apos;s list and organize your day
            </p>
            <span></span>
          </div>
        </div>
      )
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
                        textDecoration: todo.isChecked
                          ? 'line-through'
                          : 'none',
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

  return (
    <div className="App">
      <header>
        <img src={logo} alt="Rocket" />
      </header>

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
      <div className="summary">
        <div className="summary-content">
          <div>
            <span className="summary-created">Created Tasks</span>
            <span className="summary-numbers">{count}</span>
          </div>
          <div>
            <span className="summary-accomplished">Accomplished</span>
            <span className="summary-numbers">{`${countAccomplished} de ${count}`}</span>
          </div>
        </div>
      </div>
      {displayTodos()}
    </div>
  )
}

export default App
