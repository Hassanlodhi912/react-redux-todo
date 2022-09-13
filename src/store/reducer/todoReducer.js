import { ActionTypes } from "../content/ActionType"
const initialData = {
    list: [
       
    ]

}
const todoReducer = (state = initialData, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TODO:


            const { id, data } = action.payload
            return {
                ...state,
                list:
                    [
                        ...state.list,
                        {
                            id: id,
                            data: data
                        }
                    ]

            }
            case ActionTypes.DELETE_TODO:
                const newList =[...state.list]
                newList.splice(action.payload,1)
                return{
                    ...state ,
                    list : newList
    
                }
            case ActionTypes.REMOVE_TODO:
                const removeList = []
                return{
                    ...state,
                    list: removeList
                }


  
        default: return state
    }
}
export default todoReducer;