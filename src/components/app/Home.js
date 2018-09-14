import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Auth from './Auth';
import {Link} from "react-router-dom";
class Home extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log(this.props.auth);
    }

    getUser = () => {
        const user = localStorage.getItem("user");
        console.log(user);
        if (user) {
            return;
        }
    }
    render() {
        let renderRegister;
        if(this.props.auth){
            renderRegister = (<span></span>);
        }else{
            renderRegister = (
            <Link to={`/auth/register`} component={Auth} className="btn btn-lg btn-secondary">
                S'inscrire
            </Link>);

        }
        return (
            <main role="main" className="container d-flex flex-column justify-content-center align-content-center">
                <h1 className="cover-heading">Ne vous souciez plus jamais de ne pas savoir quoi manger.</h1>
                <p className="lead"><span className="custom-span font-weight-bold">CuistoSearch</span> est une plate-forme de recherche de cuisinier. Notre but et de mettre en relation des cuisiner et de particulier</p>
                <p className="lead">
                    {renderRegister}
                </p>
            </main>

        );
    }
}

Home.propTypes = {};

export default Home;
