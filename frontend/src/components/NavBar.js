import React from "react";
import { Link } from "react-router-dom";
import '../css/NavBar.css'

const NavBar = props => (
    <div className='Nav-Bar'>
       
            <div className='nav-link-container'>
                <Link className='nav-link' to='/create'>Create</Link>
                <Link className='nav-link' to="/recipes">Recipes</Link>
                <Link className='nav-link' to="/grocerylist">Grocery List</Link>
            {/* </div> */}
                <div className='nav-icon-container'>
                    <img className='nav-icon' src='https://image.flaticon.com/icons/svg/1460/1460085.svg' alt = 'logo icon'/>
                </div>
            {/* <div className='nav-link-container-two'> */}
                <Link className='nav-link' to='/calendar'>Calendar</Link>
                <Link className='nav-link' to="/settings">Settings</Link>
                <Link className='nav-link' to="/billing">Billing</Link>
            </div>
      
    </div>
);

export default NavBar;