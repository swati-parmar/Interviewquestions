import React from "react";
import {NavLink} from 'react-router-dom';


const Menu = () => {
    return (
        <div>
            <NavLink exact='true'  className={({isActive}) => (isActive ? "active-style" : 'none')} to='/'> About US</NavLink>
            <NavLink exact='true'  className={({isActive}) => (isActive ? "active-style" : 'none')} to='/contact'> Contact US</NavLink>
        </div>
    );
};

export default Menu;