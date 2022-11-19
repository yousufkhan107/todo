import {
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    doc,
    updateDoc,
    serverTimestamp

} from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../Firebase';
import { AiFillDelete } from "react-icons/ai";


const Todo1 = () => {

    const [inputValue, setInputValue] = useState('')
    const [todos, setTodos] = useState([]);
    const [indexNumber, setIndexNumber] = useState('');
    const [updateInput, setUpdateInput] = useState('');
    const [refresh, setRefresh] = useState(false);

    const dbCollection = collection(db, "todoCollection");

 
    useEffect(() => {
        async function getData() {
            const querySnapshot = await getDocs(dbCollection);
            const arr = [];
            querySnapshot.forEach((doc) => {
              
                arr.push({
                    id: doc.id,
                    todo: doc.data().Todo
                });
               
            });
            setTodos([...arr])
            
           
        }
        getData();
    },[refresh]);



    const formHandler = (e) => {
        e.preventDefault();
    }
    const ClearAll = () => {
        setTodos([]);
    }
    const addTodo = async () => {
        if(inputValue){
            const obj = {
                Todo: inputValue,
                timestamp: serverTimestamp()
            };
            const addTodo = await addDoc(dbCollection, obj); 
            setRefresh(!refresh); 
            setInputValue('')
        }
        
        
       
    }
    const deleteTodo = async(id) => {
        const Data = todos[id].id;
     
        const dbRef = doc(db, "todoCollection", Data);
        await deleteDoc(dbRef);
        setRefresh(!refresh)
        todos.splice(id, 1)
        setTodos([...todos])
    }
    const editTodo = (id) => {
        setUpdateInput(todos[id].todo);
    }
    const updateTodo = async(id) => {
        const Data = todos[id].id;
        const dbRef = doc(db, "todoCollection", Data);
        await updateDoc(dbRef,{
            Todo: updateInput,
        })
        setRefresh(!refresh)

        todos.splice(id, 1, updateInput)
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
                                <input type="text" value={updateInput} onChange={(e) => { setUpdateInput(e.target.value) }} />
                                <button onClick={() => { updateTodo(index) }}>update</button>
                            </div>)
                                : (<div key={index}>
                                    <h1>{value.todo}</h1>
                                    <button onClick={() => { editTodo(index); setIndexNumber(index) }}>Edit Todo</button>
                                    <button onClick={() => deleteTodo(index)}>Delete  <AiFillDelete     size={15}/> </button>
                                </div>)}

                        </>
                    )
                })}


            </div>
        </>
    )
}

export default Todo1