import React from 'react'
import ComponentLife from "./react生命周期函数";
import IfDemo from "./ifDemo";
import KeyDemo from "./keyDemo";
import FormComponent from "./表单受控组件";
import UnControlForm from "./表单不受控组件";
import ReactRouterDemo from "./router";
import ReactRouterPage2 from "./router2";
import {BrowserRouter as Router,Switch ,Route,Link,NavLink} from "react-router-dom"
// import {HashRouter as Router,Switch ,Route,Link} from "react-router-dom"

import ReactRouterPage1 from "./router";
import NotFound from "./NotFound";
import Login from "../pages/login";
import Main from "../pages/main";
import {withRouter,Prompt} from "react-router-dom";
import Transfer from "../pages/transfer";
import NewAccount from "../pages/newAccount";


class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            // text : '文本1'
            urlParam:'browse',
            loginStatus:'none'
        }
    }
//     buttonclick=()=>{
//         this.setState({text:'文本2'});
// }
    getUrlState=()=>{
        return this.state.urlParam;
    };

    setUrlState=(param)=>{
        this.setState({urlParam:param},function () {

        })
    };
    getLoginState=()=>{
        return this.state.loginStatus;
    };
    setLoginState=(param)=>{
        debugger;
        this.setState({loginStatus:param},function () {
            console.log('修改完成'+this.state.loginStatus)
        })
    };

    render() {
        if(this.state.loginStatus=='none'){
            // return(<div><Login parent={this}/></div>
            // <div>
            // <div><ComponentLife text={this.state.text}/></div>
            // <button onClick={this.buttonclick}>修改文本</button>
            // </div>
            // <div><KeyDemo/></div>

            // <div>
            //     <Router>
            //         <switch>
            //             <Route path="/transfer" render={()=>{return(<Transfer parent={this.props.parent}/>)}}></Route>
            //             <Route path="/newAccount" render={()=>{return(<NewAccount parent={this.props.parent}/>)}}></Route>
            //             <Route path="/main" render={()=>{return(<Main parent={this.props.parent}></Main>)}}></Route>
            //             <Route path="/login" render={()=>{return(<Login parent={this.props.parent}></Login>)}}></Route>
            //         </switch>
            //     </Router>
                {/*<div><FormComponent/></div>*/}
                {/*<div><UnControlForm/></div>*/}
return (<div><Login parent={this}/></div>)

        }
        if(this.state.loginStatus=='login'){
            return (<div><Main parent={this}/></div>)
        }

    }

}

export default App

