import React, {Component} from 'react';
import Content from "./components/layout/Content";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Auth from "./components/app/Auth";
import Main from "./components/app/Main";
import Home from "./components/app/Home";
import Acccount from "./components/app/Account";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Message from "./components/app/Message";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            auth: false,
            user: null,
            app: false
        }
    }

    componentWillMount() {
        if (this.state.user === null) {
            const user = sessionStorage.getItem("user");
            if (user) {
                this.setState({
                    user: JSON.parse(user),
                    auth: true
                });
            } else {
                this.setState({
                    user: null,
                    auth: false
                });
            }
        }
    }

    connected = () => {
        const user = sessionStorage.getItem("user");
        console.log("connectedo on APP componeent", user);
        if (user) {
            this.setState({
                user: JSON.parse(user),
                auth: true
            });
        }
    }

    disconnected = () => {
        sessionStorage.removeItem("user");
        this.setState({
            user: null,
            auth: false
        })
    }

    render() {
        return (
            <BrowserRouter>
                <div className="cover-container d-flex w-100 h-100 mx-auto flex-column">
                    <Header auth={this.state.auth} user={this.state.user} disconnect={this.disconnected}/>
                    <Content>
                        <Switch>
                            <Route exact path="/" render={(props) => <Home {...props} user={this.state.user} auth={this.state.auth}/>}/>
                            <Route path="/auth/:auth" render={(props) => <Auth {...props} user={this.state.user} check={this.connected} auth={this.state.auth}/>}/>
                            <Route path="/app" exact render={(props) => <Main {...props} disconnected={this.disconnected} user={this.state.user} auth={this.state.auth}/>}/>
                            <Route path="/app/profile/:user" render={(props) => <Acccount {...props} disconnected={this.disconnected} user={this.state.user} auth={this.state.auth}/>}/>
                            <Route path="/app/my/message/" exact render={(props) => <Message {...props} disconnected={this.disconnected} user={this.state.user} auth={this.state.auth}/>}/>
                        </Switch>
                    </Content>
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
