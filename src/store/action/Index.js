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
export const deleteTodo = (id) =>{
    return{
        type:ActionTypes.DELETE_TODO,
      id
    }
}

export const removeTodo = () =>{
    return{
        type:ActionTypes.REMOVE_TODO
    }
}