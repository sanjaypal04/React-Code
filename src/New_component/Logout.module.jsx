import React from "react";
function Logout()
{
    localStorage.removeItem('token');
    window.location.replace('/login');
    return(
        <>
          <p>Log Out</p>
        </>
    )
}
export default Logout