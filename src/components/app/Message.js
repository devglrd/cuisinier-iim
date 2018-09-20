import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Sidebar from "./Main/Sidebar";
import moment from "moment/moment";
import api from "../../api/api";
import CardMessage from "./Main/CardMessage";

class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: []
        }
    }

    componentWillMount() {
        console.log("jey !", this.props.user.id);
        let url = `http://104.248.22.184:3002/api/messages/users/${this.props.user.id}`;
        api.get(url).then(res => {
            if (res.data.result) {
                this.setState({
                    messages: res.data.result
                })
            }
        })
    }

    render() {
        let renderMessage = this.state.messages.map((item, index) => (
            <CardMessage item={item} key={item.id} recever={item.fk_recevers_id}/>
        ));
        return (
            <div className="content d-flex">
                <Sidebar auth={this.props.auth} active="message" user={this.props.user}
                         disconnected={this.props.disconnected}/>
                <div className="inside container">
                    <div className="row">
                        <div className="col-md d-flex justify-content-center align-content-center">
                                <span>
                                    Retrouvé tout vos messages <strong>{this.props.user.name}</strong>.
                                </span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="d-flex justify-content-center align-content-center flex-column">
                            {renderMessage}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Message.propTypes = {};

export default Message;
