import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-primary text-white d-flex align-items-center justify-content-center">
            <div className='container-fluid d-flex flex-column align-items-center justify-content-center'>
                <h1 className="text-white font-weight-bold text-center my-4">SNAPSHOT APP</h1>
                <div className='d-flex align-items-center justify-content-center my-4'>
                  <NavLink style={{marginRight: '70px', textDecoration: 'none'}} className='text-white' to='/'>Gallery</NavLink>
                  <NavLink style={{marginRight: '70px', textDecoration: 'none'}} className='text-white' to='/people'>People</NavLink>
                  <NavLink style={{marginRight: '70px', textDecoration: 'none'}} className='text-white' to='/cities'>Cities</NavLink>
                  <NavLink style={{marginRight: '70px', textDecoration: 'none'}} className='text-white' to='/animals'>Animals</NavLink>
                  <NavLink style={{marginRight: '70px', textDecoration: 'none'}} className='text-white' to='/nature'>Nature</NavLink>
                </div>
                <form className="d-flex" role="search">
                    <input className="form-control me-2 form-control-sm" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-danger" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}
export default NavBar;

//people
//cities
//animals
//nature
