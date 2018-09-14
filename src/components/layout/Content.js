import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Header from "./Header";
import Footer from "./Footer";
import "../../assets/css/app.css"

class Content extends Component {

    render() {
        return (
            <div className="content-app">
                {this.props.children}
            </div>
        );
    }
}

Content.propTypes = {};

export default Content;
