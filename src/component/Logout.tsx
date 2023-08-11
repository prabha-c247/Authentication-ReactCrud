import React from 'react';
import {Link} from 'react-router-dom';

const Logout = () => {
  return (
   <><div><p>You are successfully loged out </p></div>
   <Link to="/login">Login</Link>
   
   </>
  )
}

export default Logout