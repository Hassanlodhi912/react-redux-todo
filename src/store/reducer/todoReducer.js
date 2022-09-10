import { ActionTypes } from "../content/ActionType"
const initialData = {
    list: []

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
                const newList = state.list.filter((val) => val.id !== action.id)
                return{
                    ...state ,
                    list : newList
                }

  
        default: return state
    }
}
export default todoReducer;