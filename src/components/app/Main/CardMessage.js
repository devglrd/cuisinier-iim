import React, {Component} from 'react';
import PropTypes from 'prop-types';
import api from "../../../api/api";

class CardMessage extends Component {
    constructor(props){
        super(props);
        this.state = {
            recever : {}
        }
    }

    componentWillMount() {
        let url = `http://127.0.0.1:3002/api/users/${this.props.recever}`;
        api.get(url).then(res => {
                console.log(res)
            if (res.data.result) {
                this.setState({
                    recever: res.data.result[0]
                })
            }
        })
    }



    render() {
        return (
            <div className="carding  company-data" key={this.props.item.id} style={{minWidth: "20rem"}}>
                <div className="overview d-flex" style={{background: "#FFFFFF"}}>
                    {/*<div className="image">*/}
                    {/*<img src="https://logo.clearbit.com/airbnb.com"/>*/}
                    {/*</div>*/}
                    <div className="name ml-0">
                        <div className="fz-14 fw-4 text-black text-medium">Envoyé à : {this.state.recever.name}</div>
                        {/*<span className="text-medium fz-15 flex-column">{props.cuisinier.denomination}</span>*/}
                        {/*<span className="type badge badge-primary text-white fz-19 ml-2">{props.cuisinier.codeCIS}</span>*/}
                    </div>
                    {/*<a href="#" className="cerebro-report" data-toggle="tooltip" data-placement="top"*/}
                    {/*title="Tooltip on top">*/}
                    {/*<i className="cerebro-icon-report"><img src={flag} alt=""/></i>*/}
                    {/*</a>*/}
                </div>
                <div className="summary mt-3">
                    <ul className="d-flex">
                        <li>
                            <div className="fz-13 fw-6">Message</div>
                            <div className="fz-14 fw-4 text-medium">{this.props.item.message}</div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

CardMessage.propTypes = {};

export default CardMessage;
