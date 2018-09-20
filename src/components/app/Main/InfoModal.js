import React, {Component} from 'react';
import PropTypes from 'prop-types';

class InfoModal extends Component {


    render() {
        return (
            <div className={`modal fade ${this.props.show ? "show" : ""}`} id="" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalCenterTitle">{this.props.modal.name}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.props.closeModal}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Email : {this.props.modal.email}
                            <br/>
                            Adresse : {this.props.modal.adresse}
                            <br/>
                            city : {this.props.modal.city}
                            <br/>
                            age : {this.props.modal.age}
                            <br/>
                            note : {this.props.modal.notes}
                            <br/>
                            Recette favoris : {this.props.modal.preferes_recette}
                            <br/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={this.props.closeModal} data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={this.showContactModal}>Contact</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

InfoModal.propTypes = {};

export default InfoModal;
