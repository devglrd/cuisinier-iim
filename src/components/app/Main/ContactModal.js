import React, {Component} from 'react';
import PropTypes from 'prop-types';
import api from "../../../api/api";
class ContactModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            content : null,
            recever : props.modal.id,
            sender : props.user.id
        }
    }


    saveText = (e) => {
        this.setState({
            content : e.target.value
        })
    }

    sendMessage = () => {
        // let url = `http://104.248.22.184:3002/api/messages`;
        let url = `http://127.0.0.1:3002/api/messages`;
        let data = {
            fk_sender_id : this.props.user.id,
            fk_recevers_id : this.props.modal.id,
            message : this.state.content,
        };
        console.log(data);
        api.post(url, data).then(res => {
            console.log(res);
            if (res.data.success){
                this.props.displayMessage();
            }
        });


        this.props.closeModal();
    }

    render() {

        return (
            <div className={`modal fade ${this.props.show ? "show" : ""}`} id="" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalCenterTitle">Prendre contact avec {this.props.modal.name}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.props.closeModal}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Email : {this.props.modal.email}
                            <form action="" method="POST">
                                <input type="hidden" name="fk_recevers_id" value={this.props.modal.id}/>
                                <input type="hidden" name="fk_sender_id" value={this.props.user.id}/>
                                <textarea name="content" id="" cols="30" onChange={this.saveText} rows="10" placeholder="Votre message" className="form-control"></textarea>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={this.props.closeModal} data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={this.sendMessage}>Envoyer</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ContactModal.propTypes = {};

export default ContactModal;
