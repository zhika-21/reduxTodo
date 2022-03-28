import {useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import * as actions from '../store/actions/actions'
function Todos(){
    const [value,setValue] = useState("")
    const todos = useSelector((state)=>state.todosReducer)
    const dispatch = useDispatch()
    const handlerAddTodo = () =>{
        dispatch({type:actions.ADDTODO,payload:value})
    }
    const handlerDeleteTodo = () =>{
        dispatch({type:actions.DELETETODO,payload:value})
    }
    return(
        <>
        <input value={value} onChange={(e)=> setValue(e.target.value)}/>
        <div><button onClick={()=> handlerAddTodo()}>Add Todo</button></div>
        <div><button onClick={()=> handlerDeleteTodo()}>Delete Todo</button></div>
        <ul>
        {
            todos.map((todo)=>(
                <li key={todo} >{todo}</li>
            ))
        }
        </ul>
        </>
    )
}

export default Todos
