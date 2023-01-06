import React, { useEffect, useState } from 'react'

import { v4 as uuidv4 } from 'uuid'

import './App.css'
import { TodosTable } from './components/TodosTable'
import { Summary } from './components/Summary'
import { InputBar } from './components/InputBar'
import { Header } from './components/Header'

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

  function handleCreateNewTodo(event: React.FormEvent<HTMLFormElement>) {
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

  return (
    <div className="App">
      <Header />

      <InputBar handleCreateNewTodo={handleCreateNewTodo} />

      <Summary count={count} countAccomplished={countAccomplished} />

      <TodosTable
        todos={todos}
        count={count}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
    </div>
  )
}

export default App
