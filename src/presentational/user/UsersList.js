
import { UsersListItem } from "./UsersListItem";
import {  Outlet} from "react-router-dom";
import { updateFilterString,asyncGetUsers } from "../../containers/usersSlice";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { ViewUserPage } from "./viewUser";


export const UsersList = (props) => {
  const selectedID=useSelector(state=>state.users.selectedUserID)

  const viewUserPage=(selectedID)=>
  {
    if(selectedID){
      return(<ViewUserPage/>)
    }
  }

  const filterString=useSelector(state=>state.users.filterString)
  const isLoading=useSelector(state=>state.users.isLoading)

  let userslist = useSelector(state=>state.users.users).map(item =>{

    if(item.email.toUpperCase().includes(filterString.toUpperCase()))
    {
      
      return <UsersListItem userItem={item} name={item.name} email={item.email} key={item.id} id={item.id} active={item.active} admin={item.admin}/>
    }
   } );

  const dispatch=useDispatch()

 
 
 useEffect(()=>{
   dispatch(asyncGetUsers())
   
 }
 ,[])
  

 
  return (
    <>
   
    
      <div className="container placeholder-glow">
        <div className="row mt-4">
         {viewUserPage(selectedID)}
        </div>
        <div className="row mt-5 ">
          <div className="col-md-12 ">
            <h3>
              <i className="bi bi-person-circle "></i> Users
            </h3>
          </div>
        </div>

        <div className="row ">
          <div className="col-12 ">
            <input
              type="text"
              className="input sticky-md-top rounded-pill mb-3 w-75 px-3"
              placeholder="Filter by E-mail.."
              onChange={(e)=>dispatch(updateFilterString(e.target.value))}
            ></input>
            <div className="d-flex flex-row flex-wrap flex-start">
          
            
                
                  {isLoading===true?
                  <>
                   <div className=".bg-light border shadow m-3 placeholder p-3" style={{width:250,height:250,"overflowWrap":"break-word"}}>  </div>
                   <div className=".bg-light border shadow m-3 placeholder p-3" style={{width:250,height:250,"overflowWrap":"break-word"}}>  </div>
                   <div className=".bg-light border shadow m-3 placeholder p-3" style={{width:250,height:250,"overflowWrap":"break-word"}}>  </div>
                   <div className=".bg-light border shadow m-3 placeholder p-3" style={{width:250,height:250,"overflowWrap":"break-word"}}>  </div>
                   <div className=".bg-light border shadow m-3 placeholder p-3" style={{width:250,height:250,"overflowWrap":"break-word"}}>  </div>
                   <div className=".bg-light border shadow m-3 placeholder p-3" style={{width:250,height:250,"overflowWrap":"break-word"}}>  </div>
                   <div className=".bg-light border shadow m-3 placeholder p-3" style={{width:250,height:250,"overflowWrap":"break-word"}}>  </div>
</>
                  :
                  <>
                    {userslist}
                 </>
                  }
                    
                </div>


            
          </div>
        </div>
        
      </div>
      
    </>
  );
};
