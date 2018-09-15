import React, {Component} from 'react';
import search from '../../../assets/img/loader-input.svg'
import message from "../../../assets/img/message.png";
import {Link} from "react-router-dom";

import Auth from "../Auth";
import Account from "../Account";
const Sidebar = (props) => (
    <div className="sidebar">
        <ul>
            <li>
                <a className=" cursor link integrate "><img className="mr-1" width="18px" src={search} alt=""/>Recherche</a>
            </li>
            <li>
                <Link to={`/app/message`} component={Auth} className="cursor link lookup ">
                    <img className="mr-1" width="18px" src={message} alt=""/>Message
                </Link>
                {/*<a className=" cursor link lookup  active"></a>*/}
            </li>
            <li className="sep"></li>
            <li>
                <Link to={`/app/profile/${props.user.name}`} component={Account} className="cursor link lookup ">
                    {props.user.name}
                </Link>
            </li>
            <li>
                <a className=" link support ">Support</a>
            </li>
            <li>
                <a href="/logout" onClick={props.disconnected} className="link logout">déconnexion</a>
            </li>
        </ul>
    </div>
)

export default Sidebar;