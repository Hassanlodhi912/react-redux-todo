import { useState } from "react"
import { addTodo ,deleteTodo ,removeTodo } from "../../store/action/Index"
import { useDispatch ,useSelector } from "react-redux"
import "./Home.css"
const Home = () => {
const [inputData,setInputData]=useState("")
const dispatch = useDispatch();
const list = useSelector((state)=>state.todoReducer.list);
  return (
      <div className="home">
    <div className="todo">

    <h1>Todo App</h1>

<div className="input">
    <input type="text" onChange={(event)=>{setInputData(event.target.value)}} value={inputData}/> 
    <button onClick={()=>dispatch(addTodo(inputData),setInputData(""))}>add</button>
    </div>
    </div>
    <div className="item">
      {
        list.map((val)=>{
          return(
            <div className="eachItem" key={val.id}>
            <h3>{val.data}</h3>
         <button onClick={()=>dispatch(deleteTodo(val.id))}>delete</button>
     
           </div>
          )
        })
      }
     
    </div>
   </div>
  )
}

export default Home
