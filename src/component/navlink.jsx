import React from 'react'
import 'react-mdui'
import {BrowserRouter as Router, Link, NavLink, Route, Switch} from "react-router-dom";
import main from "../pages/main";
import transfer from "../pages/transfer";
import Transfer from "../pages/transfer";
import axios from "axios";
import NewAccount from "../pages/newAccount";
import Book from "../test/book";
import JavaBook from "../test/JavaBook";
import WebBook from "../test/WebBook";
import Main from "../pages/main";
import App from "../test/App";


export default class Nav extends React.Component{
    constructor(props) {
        super(props);
    }

    handleLogout=()=>{
        let _this = this;
        axios({
            url:'/account/logout',
            processData:false,
            type:"post",
        })
            .then(function (XMLHttpRequest) {
                let logoutStatus =  XMLHttpRequest.headers["logoutstatus"];
                if(logoutStatus=='success'){
                    _this.props.parent.setLoginState("none");

                }
            })
    }

    render() {
        return(
            <div className="mdui-appbar mdui-appbar-scroll-toolbar-hide mdui-color-blue-200">

                <Router>

                    <switch>
                        <Route path="/transfer" render={()=>{return(<Transfer parent={this.props.parent}/>)}}></Route>
                        <Route path="/newAccount" render={()=>{return(<NewAccount parent={this.props.parent}/>)}}></Route>
                        <Route path="/main" render={()=>{return(<Main parent={this.props.parent}></Main>)}}></Route>
                        <Route path="/app" render={()=>{return(<App/>)}}></Route>
                    </switch>
                </Router>

            </div>
        )
    }
}