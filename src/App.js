import React, { useState, useEffect} from 'react'
import InputSection from './components/InputSection'
import TodosList from './components/TodosList'


const App = () => {

  const [inputValue, setInputValue] = useState('');
  const [todosArray, setTodosArray] = useState([]);


  //LocalStorage
  useEffect(() => {

    getLocalTodos();
  }, [])

  useEffect(() => {

    saveLocalTodos();
  }, [todosArray])


  const saveLocalTodos = () => {

    localStorage.setItem('todosArray', JSON.stringify(todosArray));
  }

  const getLocalTodos = () => {
    if (localStorage.getItem('todosArray') === null) {
      localStorage.setItem('todosArray', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todosArray'));
      setTodosArray(todoLocal)
    }
  }

  return (

    <div className='container'>

      <div className='sticky-nav'>

        <header>To Do List</header>

        <InputSection 
          inputValue={inputValue} 
          setInputValue={setInputValue}
          todosArray={todosArray}
          setTodosArray={setTodosArray}

        />
      </div>
      
      <TodosList
        todosArray = {todosArray}
        setTodosArray = {setTodosArray}
      />
      
    </div>
  )
}

export default App

