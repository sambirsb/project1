import React from 'react'
import { NavLink } from 'react-router-dom';
import c from './HeaderBrand.module.css'

let HeaderBrand = () => {
    return (
        <div className={c.brand}>
            <NavLink to='/'>Logo</NavLink>
        </div>
    );
}

export default HeaderBrand