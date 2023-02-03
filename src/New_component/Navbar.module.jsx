import React from "react";
import Logout from "./Logout.module";
import { Outlet, Link } from "react-router-dom";

function Navbar(){
    return(
        <>
          <nav class="navbar navbar-dark bg-dark">
                <div class="container-fluid">
                <a class="navbar-brand" href="#">skp</a>
                <Link className="logout" to="/">Log out</Link>
                </div>
          </nav>
          <Outlet />
        </>
    )
}
export default Navbar