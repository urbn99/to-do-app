import React from 'react'
import Todo from './Todo'

const TodosList = ({ todosArray, setTodosArray}) => {
    return (
        <section className='todosList-container'>
            <ul>

                {
                    todosArray.map(todo =>(
                        <Todo
                            text = {todo.text}
                            key={todo.id}
                            todo={todo}
                            todosArray={todosArray}
                            setTodosArray={setTodosArray}
                            
                        />
                    ))
                }

                
            </ul>
        </section>
    )
}

export default TodosList
