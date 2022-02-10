import { Link,Outlet } from "react-router-dom"



export const NavBar=()=>
{
    return(
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href={window.location.origin}>User Management</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={'/users'}>Users</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to={'/register'}>Register</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
<Outlet/></>
    )
}