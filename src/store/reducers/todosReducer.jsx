import * as actions from "../actions/actions"
const initialState=[]

const todosReducer=(state=initialState,action)=>{
        switch(action.type){
            case actions.ADDTODO:
                return [...state,action.payload]
                
                    case actions.DELETETODO:
                return state.filter(sta=>sta.id !==action.payload.id)
                
                default:
                    return state


        }
}
export default todosReducer;