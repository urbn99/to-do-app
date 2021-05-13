import React from 'react'

const InputSection = ({ inputValue, setInputValue, todosArray, setTodosArray}) => {

    const handleInputValue = (e) =>{
        setInputValue(e.target.value);

    }

    const handleAddTask = (e) =>{
        e.preventDefault();

        if(inputValue !== ''){
            setTodosArray([
                ...todosArray,{
                    //utworzenie tablicy
                    id: new Date().getTime(),
                    text: inputValue,
                    completed: false,
                    
                }
            ]);
        }else{
            console.log('none')
        }
        
        setInputValue('')
        
    }

    return (
        <section className='input-task'>
            <form >
                <input 
                    type="text"
                    className='input'
                    placeholder='Type task...'
                    value={inputValue}
                    onChange={handleInputValue}
                    maxLength='35'
                    
                />
                <button 
                    className='plus-button'
                    onClick={handleAddTask}
                >+</button>
            </form>
            
        </section>
    )
}

export default InputSection
