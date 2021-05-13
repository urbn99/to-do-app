import React from 'react'
import { BsTrash, BsCheck } from 'react-icons/bs';

const Todo = ({text,todo,todosArray,setTodosArray}) => {

    const handleTrash = () =>{
        setTodosArray(todosArray.filter((el) => el.id !== todo.id))
    }

    const handleCheck = () =>{

        setTodosArray(todosArray.map((item) => {
             if(item.id === todo.id){
                return{
                    ...item,
                        completed: !item.completed
                }
            }
            return item
        }))

    }

    return (
        < >

            <li className={`todo-item ${todo.completed ? 'completed':''}`}>
                
                <button
                    className="trash"
                    type='submit'
                    onClick={handleTrash}>
                    <BsTrash />
                </button>

                <button
                    className="check"
                    type='submit'
                    onClick={handleCheck}>
                    <BsCheck />
                </button>

                {text}
            </li>
                
        </>
        
    )
}

export default Todo
