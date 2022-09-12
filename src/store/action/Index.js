import { ActionTypes } from "../content/ActionType";
export const addTodo = (data) =>{
    return{
        type:ActionTypes.ADD_TODO,
        payload: {
            id:new Date().getDate.toString,
            data:data
        }
    }
}
export const deleteTodo = (index) =>{
    return{
        type:ActionTypes.DELETE_TODO,
      payload:index

      
    }
}

export const removeTodo = () =>{
    return{
        type:ActionTypes.REMOVE_TODO
    }
}