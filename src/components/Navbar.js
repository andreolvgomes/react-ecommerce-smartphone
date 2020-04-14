import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import logo from '../logo.svg'

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
                <Link to='/'>
                    <img src={process.env.PUBLIC_URL + '/logo.svg'} alt="store" className="navbar-brand" />
                </Link>

                <ul className="navbar-nav aling-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            PRODUCTS
                        </Link>
                    </li>
                </ul>

                <Link to="/cart" className="ml-auto">
                    <button>
                        <i className="fa fa-cart-plus"/>
                         My Cart
                    </button>
                </Link>
            </nav>
        );
    }
}

export default Navbar;