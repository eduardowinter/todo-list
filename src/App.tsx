import { useEffect, useState } from 'react'
import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import { v4 as uuidv4 } from 'uuid'

import logo from './assets/logo.svg'
import './App.css'
import { PlusCircle, Trash } from 'phosphor-react'

interface Todos {
  id: string
  description: string
  isChecked: boolean
}

function App() {
  const todosList = [
    {
      id: 12345,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quisquam, voluptatum odio aperiam eius excepturi, recusandae, neque rerum molestias obcaecati magni soluta laboriosam exercitationem vel aspernatur assumenda reprehenderit eveniet unde!',
      isChecked: false,
    },
    {
      id: 12346,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quisquam, voluptatum odio aperiam eius excepturi, recusandae, neque rerum molestias obcaecati magni soluta laboriosam exercitationem vel aspernatur assumenda reprehenderit eveniet unde!',
      isChecked: false,
    },
    {
      id: 12347,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quisquam, voluptatum odio aperiam eius excepturi, recusandae, neque rerum molestias obcaecati magni soluta laboriosam exercitationem vel aspernatur assumenda reprehenderit eveniet unde!',
      isChecked: true,
    },
  ]

  const [todos, setTodos] = useState<Todos[]>(todosList)

  function handleCreateNewTodo() {
    event.preventDefault()

    const description = event.target.description.value

    const newTodo = {
      id: uuidv4(),
      description,
      isChecked: false,
    }

    setTodos([...todos, newTodo])

    event.target.reset()
  }

  return (
    <div className="App">
      <header>
        <img src={logo} className="logo react" alt="React logo" />
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
            <span className="summary-numbers">5</span>
          </div>
          <div>
            <span className="summary-accomplished">Accomplished</span>
            <span className="summary-numbers">2 de 5</span>
          </div>
        </div>
      </div>
      <div className="todo-list">
        <ul>
          {todos.map((todo) => {
            return (
              <li key={todo.id}>
                <div className="todo-card">
                  <div className="todo-check">
                    <Checkbox.Root className="CheckboxRoot" id="c1">
                      <Checkbox.Indicator className="CheckboxIndicator">
                        <CheckIcon />
                      </Checkbox.Indicator>
                    </Checkbox.Root>
                  </div>
                  <div className="todo-content">{todo.description}</div>
                  <Trash className="trash-icon" size={24} />
                </div>
              </li>
            )
          })}
        </ul>
      </div>

      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  )
}

export default App
