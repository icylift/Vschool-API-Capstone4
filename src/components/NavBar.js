import { render } from "@testing-library/react";
import React from "react";
import { Link, useNavigate } from 'react-router-dom'



function NavBar() {

  let navigate = useNavigate();
  const homeBtn = () => {

    let path = '/'
    navigate(path)

  

  }




  return(
    <div className="nav">
      <h1 className="name" onClick={homeBtn}>NutriWhiz</h1>
      
      <br/>

      <div className="search-wrapper">
      <Link to="/search" >
        <button className="search-btn"><span>Search</span></button>
      </Link>
      </div>


      <br/>

      <div className="tracker-wrapper">
      <Link to="/tracker" >
        <button className="tracker-btn"><span>Tracker</span></button>
      </Link>
      </div>

    </div>
  )
}





export default NavBar