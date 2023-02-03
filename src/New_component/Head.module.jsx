import react, { Fragment } from 'react';
import headcss from './Headcss.module.css';
function Head() {
  return(
    <Fragment>
      
    <div >
      <ul className={headcss.headSection}>
        <li className={headcss.fname}>First Name</li>
        <li className={headcss.lname}>Last Name</li>
        <li className={headcss.email}>email</li>
      </ul>
    </div>
    </Fragment>
  );
}
  function Head2() {
    return(
      <Fragment>
        
      <div >
        <ul className={headcss.headSection}>
          <li className={headcss.city}>City</li>
          <li className={headcss.state}>State</li>
          <li className={headcss.country}>Country</li>
        </ul>
      </div>
      </Fragment>
    );
}
export  {Head,Head2};
