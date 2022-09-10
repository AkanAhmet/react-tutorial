import { Routes, Route, Link, useMatch } from "react-router-dom";
import Home from "./Home.js";
import About from "./About.js";
import Users from "./Users.js";
import User from "./User.js";

export default function UsingRouter() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">

          <Link to="" className="navbar-brand" >
            AKAN
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className={
                    useMatch({ path: "", end: true })
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={
                    useMatch({ path: "about", end: true })
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={
                    useMatch({ path: "users", end: true })
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/users"
                >
                  Users
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="row">
        <div className="column mt-4">
          <h1>Welcome to React Router!</h1>
          <hr />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />

            <Route path="users" element={<Users />} > 
            <Route path=":id" element={<User />} />    {/* !!!! IMPORTANT = /:id */}
            </Route>    

            <Route path="*" element = {<Nomatch />}/>       
    
          </Routes>
        </div>
      </div>
    </>
  );
}

function Nomatch(){

  return(
  <>
    <div className="row my-5">
      <div className="col text-center">

        <h4 className="display-5"> Page not Found !</h4>
        <Link to = "/"> return to Home</Link>
      </div>


    </div>
  </>
  )

}
