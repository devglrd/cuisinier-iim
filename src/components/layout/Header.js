import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Link} from "react-router-dom";
import Auth from '../app/Auth';
import Main from '../app/Main';
import Home from '../app/Home';
class Header extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount (){
    }

    render() {
        let renderNavbar;
        if (this.props.auth){
            renderNavbar = (<div className="d-flex ml-3">

            <Link to={`/app`} component={Main}  className="nav-link">
                Cuistosearch
            </Link>
            <div className="nav-link" onClick={this.props.disconnect}>Logout</div>
            </div>)
        } else{
            renderNavbar = (<Link to={`/auth/login`} component={Auth} className="nav-link">login</Link>)
        }
        return (
            <header className="masthead mb-auto container">
                <div className="inner">
                    <h3 className="masthead-brand">Cuistosearch</h3>
                    <nav className="nav nav-masthead justify-content-center">
                        <Link to={`/`} component={Home} className="nav-link">
                           Acceuil 
                        </Link>
                        {renderNavbar}
                    </nav>
                </div>
            </header>
        );
    }
}

Header.propTypes = {};

export default Header;
