import React, { useReducer } from 'react'
const initialState=[];
function reducer(state,action){
switch(action.type){
    case 'add-task':
return[...state,{
    id:state.length,
    name:action.payload

    
}]
case 'delete-task':
    return state.filter(d =>d.id !== action.payload)
    default:return state;
}
}

const Todo = () => {
    const[Todo,dispatch] = useReducer(reducer,initialState);
  return (
    <>
    <h4>Todo list{Todo.length}</h4>
    Add new task : 
      <input type="text"placeholder='add new item' 
      
      onBlur={(e)=>dispatch({type:'add-task',payload:e.target.value})}/>
   
   <hr/>
   {Todo.map(todo =><li key={todo.id}>{todo.name}
   
   <span>
    <button onClick={()=>dispatch({type:'delete-task',payload:todo.id})}>
      Delete

    </button>
   </span>
   
   </li>)}
   
    </>
  )
}

export default Todo