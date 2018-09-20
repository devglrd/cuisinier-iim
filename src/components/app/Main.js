import React, {Component} from 'react';
import PropTypes from 'prop-types';
import api from "../../api/api";

import Sidebar from './Main/Sidebar';
import Search from './Main/Search';
import Card from './Main/Card';
import InfoModal from "./Main/InfoModal";
import ContactModal from "./Main/ContactModal";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: null,
            flashMessage: null,
            loading: false,
            cuisinier: [],
            pages: "search",
            show: false,
            infoModal: {},
            showContact: false,
        }
    }


    searchCuisto = (e) => {
        e.preventDefault();
        console.log('ok');
        this.setState({
            loading: true
        });
        if (this.state.search === null) {
            this.setState({
                flashMessage: "Vous devez ecrire quelque chose"
            });
            return;
        }


        let url = `http://104.248.22.184:3002/api/users/search/${this.state.search}`;
        api.get(url).then(res => {
            console.log(res);
            if (res.data.result) {
                this.setState({
                    cuisinier: res.data.result,
                })
                setInterval(() => {
                    this.setState({
                        loading: false,
                    })
                }, 2000)
            }
        })
    }

    handleIput = (e) => {
        this.setState({search: e.target.value})
    }

    showModal = (item) => {
        // let bod = document.getElementsByTagName("body");
        // bod[0].appendChild("<div class='modal-backdrop fade show'></div>");
        // $("body").append("");
        let el = document.body.appendChild((document.createElement('div')));
        el.className += " modal-backdrop fade show";
        this.setState({show: true, showContact: false, infoModal: item}, console.log("modal"));
    }

    showContactModal = (item) => {
        let el = document.body.appendChild((document.createElement('div')));
        el.className += " modal-backdrop fade show";
        this.setState({show: false, showContact: true, infoModal: item}, console.log("modal"));
    }

    closeContactModal = (e) => {
        let ele = document.getElementsByClassName("modal-backdrop");
        let el = document.body.removeChild(ele[0]);
        this.setState({show: false, showContact: false, infoModal: {}}, console.log("modal"));
    }

    closeModal = (e) => {
        let ele = document.getElementsByClassName("modal-backdrop");
        let el = document.body.removeChild(ele[0]);
        this.setState({show: false, showContact: false, infoModal: {}}, console.log("modal"))
    }

    displayMsg = () => {
        console.log();
        let scrollStep = -window.scrollY / (100 / 15),
            scrollInterval = setInterval(function () {
                if (window.scrollY != 0) {
                    window.scrollBy(0, scrollStep);
                }
                else clearInterval(scrollInterval);
            }, 15);
        this.setState({
            flashMessage : "Message envoyé !"
        })
    }


    render() {
        let renderCard;

        if (this.state.cuisinier) {
            renderCard = this.state.cuisinier.map((item, index) => (
                <div className="col-md-4">
                    <div className="carding">
                        <div className="perso">
                            <Card showModal={this.showModal.bind(this, item)}
                                  showContactModal={this.showContactModal.bind(this, item)} key={item.id}
                                  cuisinier={item}/>
                        </div>
                    </div>
                </div>
            ));
        }
        return (
            <div className="content d-flex">
                <Sidebar auth={this.props.auth} active="search" user={this.props.user} disconnected={this.props.disconnected}/>
                <div className="inside container">
                    <Search onSearch={this.searchCuisto} onChange={this.handleIput.bind(this)}
                            message={this.state.flashMessage} loading={this.state.loading}/>
                    <span className="mt-3 text-success">
                        {this.state.flashMessage}
                    </span>
                    <div className="row">
                        {renderCard}
                        <InfoModal closeModal={this.closeModal} show={this.state.show} modal={this.state.infoModal}/>
                        <ContactModal user={this.props.user} sendMessage={this.sendMessage}
                                      closeModal={this.closeContactModal} show={this.state.showContact}
                                      modal={this.state.infoModal} displayMessage={this.displayMsg} />
                    </div>
                </div>
            </div>
        );
    }
}

Main.propTypes = {};

export default Main;