import React ,{Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import {Provider} from 'react-redux';
import {Provider as AlertProvider} from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Header from "./layout/header";
import Dashboard from "./leads/dashboard";
import Alerts from "./layout/alerts";
import Login from "./accounts/login";
import Register from "./accounts/register";
import store from "../store"
import PrivateRoute from "./comments/PrivateRoute";
import {LoadUser} from "../actions/auth";

const alertOptions = {
    timeout:3000,
    position: 'top center'
};
class App extends Component{
    componentDidMount() {

        store.dispatch(LoadUser());
    }

    render(){
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} { ...alertOptions}>
                    <Router>
                    <Fragment>
                       <Header />
                        <Alerts/>
                       <div className="container">
                           <Switch>
                               <PrivateRoute exact path="/" component=
                                   {Dashboard}/>
                               <Route exact path="/register" component=
                                   {Register}/>
                               <Route exact path="/login" component=
                                   {Login}/>
                           </Switch>
                       </div>
                    </Fragment>
                    </Router>
                </AlertProvider>
            </Provider>
        )
    }
}
ReactDOM.render(<App />,document.getElementById('app'));