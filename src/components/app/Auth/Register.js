import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Auth from "../Auth";
import {Link} from "react-router-dom";
import api from "../../../api/api";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            email: null,
            password: null,
            confirm_password: null,
            flashMessage : null
        }
    }


    handleInput = (e) => {
        if (e.target.name === "name"){
            this.setState({
                name : e.target.value
            })
        } else if (e.target.name === "email"){
            this.setState({
                email : e.target.value
            })
        }else if (e.target.name === "password"){
            this.setState({
                password : e.target.value
            })
        }else if (e.target.name === "confirm_password"){
            this.setState({
                confirm_password: e.target.value
            })
        }
    };

    register = () => {
        let url = "http://104.248.22.184:3002/api/register";
        let data = {
            name : this.state.name,
            email : this.state.email,
            password : this.state.password,
            confirm_password : this.state.confirm_password,
        };
        api.post(url, data).then(res => {
            console.log(res);
            if(res.data.result.insertId){
                this.setState({
                    name: null,
                    email: null,
                    password: null,
                    confirm_password: null,
                    flashMessage : "Votre compte à bien été crée, connectez vous."
                })
            }else{
                this.setState({
                    flashMessage : res.data.error
                })
            }
        })
    };

    render() {
        return (
            <div className="w-50 m-auto text-center">
                <h1 className="h3 mb-3 font-weight-normal">Inscrivez vous</h1>
                <div className="form-group">
                    <label htmlFor="" className="sr-only">Name</label>
                    <input onChange={this.handleInput.bind(this)} type="text" name="name" className="form-control"
                           placeholder="Name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="" className="sr-only">Email address</label>
                    <input onChange={this.handleInput.bind(this)} type="email" name="email" className="form-control"
                           placeholder="Email address"/>
                </div>
                <div className="form-group">
                    <label htmlFor="" className="sr-only">Password</label>
                    <input onChange={this.handleInput.bind(this)} type="password" name="password" className="form-control"
                           placeholder="Password" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="" className="sr-only">Confirm Password</label>
                    <input onChange={this.handleInput.bind(this)} type="password" name="confirm_password" className="form-control"
                           placeholder="Password" required/>
                </div>
                <span className="fz-10 text-success">{this.state.flashMessage}</span>
                <button className="btn btn-lg btn-primary btn-block mb-3" data-link="register" onClick={this.register}>S'inscire
                </button>
                <Link to={`/auth/login`} component={Auth} className="cursor text-black">
                    Se connecter
                </Link>
            </div>
        );
    }
}

Register.propTypes = {};

export default Register;
