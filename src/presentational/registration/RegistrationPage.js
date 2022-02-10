import { useDispatch, useSelector } from "react-redux";
import { updatePassword1,updatePassword2 } from "../../containers/registerSlice";




export const RegistrationPage = () => {

    const dispatch=useDispatch()
    const password1=useSelector(state=>state.register.password1)
    const password2=useSelector(state=>state.register.password2)
    let passwordValidationStyler=""
    let canSubmit=true


    const submitRegistrationForm=(e)=>
    {
        e.preventDefault()
        
        

    }

    if(password1!==password2){
        passwordValidationStyler='text-danger'
        canSubmit=true

    }
    else{
        passwordValidationStyler=''
        canSubmit=false
    }
   




  return (
    <div className="container mt-4 ">
      <div className="card ">
        <div className="card-header">Registration Form</div>
        <div className="card-body">
          <div className="containter">
            <form onSubmit={submitRegistrationForm}>
              <div className="row">
                <div className="col-md-6">
                  <div class="form-floating mb-3">
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="E-mail Address"
                      required="true"
                      
                    />
                    <label for="email">Email address</label>
                  </div>

                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="Full Name"
                      required="true"
                    />
                    <label for="name">Full Name</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="department"
                      placeholder="Department"
                      required="true"
                    />
                    <label for="name">Department</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div class="form-floating mb-3">
                    <input
                      type="password"
                      class="form-control"
                      id="password"
                      placeholder="Password"
                      required="true"
                      minLength="8"
                      onChange={(e)=>{
                          dispatch(updatePassword1(e.target.value))}}
                    />
                    <label className={passwordValidationStyler} for="password">Password</label>
                  </div>

                  <div class="form-floating mb-3">
                    <input
                      type="password"
                      class="form-control"
                      id="password2"
                      placeholder="Repeat Password"
                      required="true"
                      minLength="8"
                      onChange={(e)=>{dispatch(updatePassword2(e.target.value))}}
                    />
                    <label className={passwordValidationStyler} for="password2">Repeat Password</label>
                  </div>
                </div>
              </div>
              <div className="row d-flex justify-content-end">
                <a className="mt-3 text-primary" href="#">
                  Already registered? Log in here...
                </a>
                <div className="col-md-3 d-flex justify-content-end">
                  <button type="submit" disabled={canSubmit} class="btn btn-outline-primary mx-3">
                    Submit
                  </button>
                  <button type="reset" class="btn btn-outline-secondary">
                    Clear
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
