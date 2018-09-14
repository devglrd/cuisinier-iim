import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {
    render() {
        return (
            <footer className="mastfoot mt-auto d-flex justify-content-center">
                <div className="inner">
                    <p>Cuistosearch</p>
                </div>
            </footer>
        );
    }
}

Footer.propTypes = {};

export default Footer;
