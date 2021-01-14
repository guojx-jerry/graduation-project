import React from 'react'
import 'react-mdui'
import Nav from "../component/navlink";
import {BrowserRouter as Router, NavLink, Route} from "react-router-dom";
import Transfer from "./transfer";
import NewAccount from "./newAccount";
import App from "../test/App";


export default class Main extends React.Component{
    constructor(props) {
        super(props)

    }
    render() {
        return(

   <div>
            {/*<div className="mdui-theme-primary-indigo mdui-theme-accent-pink"><div className="mdui-toolbar mdui-color-theme">*/}
            {/*    <a href="javascript:;" className="mdui-btn mdui-btn-icon"><i*/}
            {/*        className="mdui-icon material-icons">menu</i></a>*/}
            {/*    <span className="mdui-typo-title">主界面</span>*/}
            {/*    <div className="mdui-toolbar-spacer"></div>*/}
            {/*    <a href="javascript:;" className="mdui-btn mdui-btn-icon"><i className="mdui-icon material-icons">search</i></a>*/}
            {/*    <a href="javascript:;" className="mdui-btn mdui-btn-icon"><i*/}
            {/*        className="mdui-icon material-icons">refresh</i></a>*/}
            {/*    <a href="javascript:;" className="mdui-btn mdui-btn-icon"><i*/}
            {/*        className="mdui-icon material-icons">more_vert</i></a>*/}
            {/*</div>*/}
            {/*</div>*/}
   <table width="100000">
    <tr>

                    {/*<div className="mdui-appbar mdui-appbar-scroll-toolbar-hide mdui-color-blue-200">*/}

                    {/*    <Router>*/}

                    {/*        <div className="mdui-tab mdui-color-theme" mdui-tab>*/}
                    {/*            <NavLink to="/findAll"> <a href="#example3-tab1" className="mdui-ripple mdui-ripple-white">查询所有好友</a></NavLink>*/}
                    {/*            <NavLink to="/newAccount"><a href="#example3-tab2" className="mdui-ripple mdui-ripple-white">新增账号</a></NavLink>*/}
                    {/*            <NavLink to="/transfer"><a href="#example3-tab3" className="mdui-ripple mdui-ripple-white">转账</a></NavLink>*/}
                    {/*            <a className="mdui-ripple mdui-ripple-white" onClick={this.handleLogout}>注销</a>*/}
                    {/*        </div>*/}
                    {/*        <switch>*/}
                    {/*            <Route path="/transfer" render={()=>{return(<Transfer parent={this.props.parent}/>)}}></Route>*/}
                    {/*            <Route path="/newAccount" render={()=>{return(<NewAccount parent={this.props.parent}/>)}}></Route>*/}
                    {/*            <Route path="/main" render={()=>{return(<Main parent={this.props.parent}></Main>)}}></Route>*/}
                    {/*        </switch>*/}
                    {/*    </Router>*/}

                    {/*</div>*/}
                    <Router>
                    <div className="mdui-tab mdui-color-theme" mdui-tab>
                        <NavLink to="/findAll"> <a href="#example3-tab1" className="mdui-ripple mdui-ripple-white">查询所有好友</a></NavLink>
                        <NavLink to="/newAccount"><a href="#example3-tab2" className="mdui-ripple mdui-ripple-white">新增账号</a></NavLink>
                        <NavLink to="/transfer"><a href="#example3-tab3" className="mdui-ripple mdui-ripple-white">转账</a></NavLink>
                        <a className="mdui-ripple mdui-ripple-white" onClick={this.handleLogout}>注销</a>
                    </div>
                    </Router>
                    {/*<Nav parent={this.props.parent}/>*/}

    </tr>


</table>
   </div>
        )
    }
}