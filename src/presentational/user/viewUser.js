import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleActive ,toggleAdmin,selectUser} from "../../containers/usersSlice";




export const ViewUserPage = () => {

  const selectedID=useSelector(state=>state.users.selectedUserID)
const selectedUser=useSelector(state=>state.users.users.find(item=>item.id===selectedID))
  
const dispatch=useDispatch()






  if(selectedUser){
  
  
  return (
    <>
    
     

      <div className="card px-0">
        <div className="card-header">User Profile</div>
        <div classname="card-body">
          <div className="container">
            <div className="row ">
              <div className="col-md-6 input-group-sm">
                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
                  <strong>Email</strong>
                </label>
                <input
                  type="text"
                    readOnly
                  className="form-control-plaintext"
                  id="staticEmail"
                  value={selectedUser.email}
                />
                <label htmlFor="staticName" className="col-sm-2 col-form-label">
                 <strong>Name</strong> 
                </label>
                <input
                  type="text"
                  readOnly
                  className="form-control-plaintext"
                  id="staticName"
                  value={selectedUser.name}
                />
                <label htmlFor="department" className="form-label">
                  <strong>Department</strong>
                </label>
                <input
                  type="text"
                  className="form-control mb-3"
                  id="department"
                  aria-describedby="Department"
                  value={selectedUser.department}
                />
              </div>
              <div className="col-md-3">
                <strong>Actions</strong>
                <br/>
                <br/>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    on
                    id="activecheckbox"
                    checked={selectedUser.active}
                    onChange={(e)=>{
                      dispatch(toggleActive({value:e.target.checked,id:selectedUser.id}))
                    }}
                    
                  />
                  <label className="form-check-label" htmlFor="activecheckbox">
                    Active
                  </label>
                </div>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="admincheckbox"
                    checked={selectedUser.admin}
                    onChange={(e)=>{
                      dispatch(toggleAdmin({value:e.target.checked,id:selectedUser.id}))
                    }}
                  />
                  <label className="form-check-label" htmlFor="admincheckbox">
                    Admin
                  </label>
                </div>
                <br/>

                <a href="">Reset Password</a>
                
               
              </div>
              <div className="col-md-3 d-flex flex-row justify-content-end justify-content-end align-items-end">
                
               
                <button type="button" onClick={()=>dispatch(selectUser(""))} className="btn btn-secondary d-inline m-2">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )}
  else
  {
    return <p>Oops. something went wrong</p>
  }
};
