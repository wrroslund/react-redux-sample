import React, { Component } from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';


class Header extends Component {
    render() {
        return (
            // <header className="App-header">
            //     <img src={logo} className="App-logo" alt="logo" />
            //     <h1 className="App-title">Welcome to React</h1>
            // </header>
            <div>
                <Navbar color="faded" light expand="md">
                    
                        <Link to={`/matter`}>Matters</Link>
                </Navbar>
            </div>
        );
    }
}

export default Header;