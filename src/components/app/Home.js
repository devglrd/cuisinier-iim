import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Auth from './Auth';
import {Link} from "react-router-dom";
class Home extends Component {

    componentDidMount(){

    }

    getUser = () => {
        const user = localStorage.getItem("user");
        console.log(user);
        if (user) {
            return;
        }
    }
    render() {
        return (
            <main role="main" className="inner cover container">
                <h1 className="cover-heading">Ne vous souciez plus jamais de na pas savoir quoi manger.</h1>
                <p className="lead"><span style={{color: "yellow"}}>CuistoSearch</span> est une plate-forme de recherche de cuisinier. Notre but et de mettre en relation des cuisiner et de particulier</p>
                <p className="lead">
                    <Link to={`/auth/register`} component={Auth} className="btn btn-lg btn-secondary">
                        S'inscrire
                    </Link>
                </p>
            </main>

        );
    }
}

Home.propTypes = {};

export default Home;
