import React, { useState } from 'react'

const Todo = () => {
    const [inputValue, setInputValue] = useState('')
    const [todos, setTodos] = useState([]);
    const [indexNumber, setIndexNumber] = useState('');
    const [updateInput,setUpdateInput] = useState('');

    const formHandler = (e) => {
        e.preventDefault();
    }
    const ClearAll = () => {
        setTodos([]);
    }
    const addTodo = () => {
        if(inputValue){
            setTodos(preState => [inputValue, ...preState])
        }
        setInputValue('')
    }
    const deleteTodo = (id) => {
        todos.splice(id, 1)
        setTodos([...todos])
    }
    const editTodo = (id) => {
        setUpdateInput(todos[id]);
     }
     const updateTodo =(id)=>{
        todos.splice(id,1,updateInput)
        setTodos([...todos])
        setIndexNumber('');
        setUpdateInput('')
     }

    return (
        <>
            <div>
                <form onSubmit={formHandler}>
                    <input type="text" value={inputValue} onChange={(e) => { setInputValue(e.target.value) }} />
                    <button onClick={addTodo}>Add Todo</button>
                    <button onClick={ClearAll}>Clear All</button>
                </form>
            </div>

            <div>
                {todos.map((value, index) => {

                    return (

                        <>
                            {indexNumber === index ? (<div key={index}>
                                <input type="text" value={updateInput} onChange={(e)=>{setUpdateInput(e.target.value)}}/>
                                <button onClick={()=>{updateTodo(index)}}>update</button>
                            </div>) 
                            :(<div key={index}>
                                <h1>{value}</h1>
                                <button onClick={() => { editTodo(index); setIndexNumber(index) }}>Edit Todo</button>
                                <button onClick={() => deleteTodo(index)}>Delete Todo</button>
                            </div>) }
                            
                        </>
                    )
                })}


            </div>
        </>
    )
}

export default Todo