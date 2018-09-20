import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Sidebar from "./Main/Sidebar";
import api from '../../api/api'

class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.user.name,
            email: props.user.email,
            adresse: props.user.adresse,
            tarif: props.user.tarif
        }

    }


    modifyAccount = () => {
        let url = `http://104.248.22.184:3002/api/users/update`;
        let data = {
            name: this.state.name,
            email: this.state.email,
            adresse: this.state.adresse,
            tarif: this.state.tarif,
            id : this.props.user.id
        }
        console.log(data);
        api.post(url, data).then(res => {
            console.log(res)
        })
    }


    handleInput = (e) => {
        if (e.target.name === "name") {
            this.setState({
                name: e.target.value
            })
        } else if (e.target.name === "email") {
            this.setState({
                email: e.target.value
            })
        } else if (e.target.name === "adresse") {
            this.setState({
                adresse: e.target.value
            })
        } else if (e.target.name === "tarif") {
            this.setState({
                tarif: e.target.value
            })
        }
    };

    render() {
        return (
            <div>
                <div className="content d-flex">
                    <Sidebar auth={this.props.auth} active="profile" user={this.props.user}
                             disconnected={this.props.disconnected}/>
                    <div className="inside container">
                        <div className="row">
                            <div className="col-md d-flex justify-content-center align-content-center">
                                <span>
                                    Votre compte <strong>{this.props.user.name}</strong>.
                                </span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="d-flex justify-content-center align-content-center flex-column mt-5">
                                <div className="form px-5 pt-4">
                                    <div className="form-group d-flex align-items-center justify-content-between">
                                        <span>Email : </span>
                                        <input onChange={this.handleInput} type="text" value={this.props.user.email}
                                               name="email"/>
                                    </div>
                                    <div className="form-group d-flex align-items-center justify-content-between">
                                        <span>Name : </span>
                                        <input onChange={this.handleInput} type="text" value={this.props.user.name}
                                               name="name"/>
                                    </div>
                                    <div className="form-group d-flex align-items-center justify-content-between">
                                        <span>Adresse : </span>
                                        <input onChange={this.handleInput} type="text" value={this.props.user.adresse}
                                               name="adresse"/>
                                    </div>
                                    <div className="form-group d-flex align-items-center justify-content-between">
                                        <span>Tarifs : </span>
                                        <input onChange={this.handleInput} type="text" value={this.props.user.tarif}
                                               name="tarif"/>
                                    </div>
                                    <div className="form-group d-flex align-items-center justify-content-center">
                                        <button className="btn btn-outline-success"
                                                onClick={this.modifyAccount}>Modifier
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Account.propTypes = {};

export default Account;
