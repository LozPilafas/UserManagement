import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { selectUser } from "../../containers/usersSlice"


export const UsersListItem=(props)=>
{

    const dispatch=useDispatch()

    return (


        <div className=".bg-light border shadow m-3  p-3" style={{width:250,height:250,"overflowWrap":"break-word"}}> 
        
        <p><strong><a href="#" onClick={()=>dispatch(selectUser(props.id))} >{props.email}</a></strong></p>
        <p><strong>{props.name}</strong></p>
        <p>Active: {props.active?'Yes':'No'}</p>
        <p>Admin: {props.admin?'Yes':'No'}</p>
        
        
        
        </div>


    )
}