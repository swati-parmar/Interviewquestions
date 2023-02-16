import React from "react";
import {NavLink} from 'react-router-dom';


const Menu = () => {
    return (
        <div className="menu_style">
            <NavLink
                exact='true'  className={({isActive}) => (isActive ? "active-style" : 'none')} to='/'>
                 About US
            </NavLink>
            <NavLink 
                exact='true'  className={({isActive}) => (isActive ? "active-style" : 'none')} to='/service'> 
                Services
            </NavLink>
            <NavLink 
                exact='true'  className={({isActive}) => (isActive ? "active-style" : 'none')} to='/contact'> 
                Contact US
            </NavLink>
            <NavLink 
                exact='true'  className={({isActive}) => (isActive ? "active-style" : 'none')} to='/search'> 
                Search
            </NavLink>
            <NavLink 
                exact='true'  className={({isActive}) => (isActive ? "active-style" : 'none')} to='/user/swati/parmar'> 
                User
            </NavLink>
        </div>
    );
};

export default Menu;