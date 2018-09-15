import React, {Component} from 'react';
import PropTypes from 'prop-types';
import api from "../../api/api";

import Sidebar from './Main/Sidebar';
import Search from './Main/Search';
import Card from './Main/Card';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            search : null,
            flashMessage : null,
            loading : false,
            cuisinier : [],
            pages : "search"
        }
    }



    searchCuisto = (e) => {
        e.preventDefault();
        console.log('ok');
        this.setState({
            loading : true
        });
        if (this.state.search === null) {
            this.setState({
                flashMessage : "Vous devez ecrire quelque chose"
            });
            return;
        }


        let url = `http://104.248.22.184:3002/api/users/search/${this.state.search}`;
        api.get(url).then(res => {
            console.log(res);
            if(res.data.result){
                this.setState({
                    cuisinier : res.data.result,
                })
                setInterval(() => {
                    this.setState({
                        loading: false,
                    })
                }, 3000)
            }
        })
    }

    handleIput = (e) => {
        this.setState({search: e.target.value})
    }

    render() {
        let renderCard;

        if (this.state.cuisinier){
            renderCard = this.state.cuisinier.map((item, index) => (
                <div className="col-md-4">
                    <div className="carding">
                        <div className="perso">
                            <Card key={item.id} cuisinier={item} />
                        </div>
                    </div>
                </div>
            ));
        }
        return (
            <div className="content d-flex">
                <Sidebar auth={this.props.auth} user={this.props.user} disconnected={this.props.disconnected}  />
                <div className="inside container">
                    <Search onSearch={this.searchCuisto} onChange={this.handleIput.bind(this)} message={this.state.flashMessage} loading={this.state.loading} />
                    <div className="row">
                            {renderCard}
                    </div>
                </div>
            </div>
        );
    }
}

Main.propTypes = {};

export default Main;