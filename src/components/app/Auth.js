import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import api from "../../api/api";
import Login from "./Auth/Login";
import Register from "./Auth/Register";

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: "login",
            user: null
        }
    }

    static getDerivedStateFromProps = (props, state) => {
        if (state.auth !== props.match.params.auth) {
            return {
                auth: props.match.params.auth
            }
        }else{
            return null
        }
    };


    componentDidMount(){
        if (this.props.match.params.auth === "login"){
            this.setState({
                auth : this.props.match.params.auth
            })
        } else if (this.props.match.path === "register"){
            this.setState({
                auth : this.props.match.params.auth
            })
        }
    }

    redirect = () => {
        window.location.href = "http://localhost:3003/";
    }

    isConnect = () => {
        this.props.check();
    }

    render() {
        let renderAuth;
        if(this.props.user === null){
            if (this.state.auth === "login") {
                renderAuth = (<Login userConnected={this.isConnect} />);
            } else if (this.state.auth === "register") {
                renderAuth = (<Register />);
            }
        }else{
            renderAuth = (<p className="text-success">Vous êtes connectée !</p>)
        }
        return (
            <section className="auth">
                <div className="container">
                    <div className="row">
                        <div className="col d-flex justify-content-center">
                            {renderAuth}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

Auth.propTypes = {};

export default Auth;
