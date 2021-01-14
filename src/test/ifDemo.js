import React from "react"

export default class IfDemo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            islogin : false
        };
    }
    login=()=>{
        this.setState({
            islogin : true
        })
    }
    returnfalse=()=>{
        this.setState({
            islogin : false
        })
    }
    render() {
        let showView = this.state.islogin


if(showView){return(
    <div>
    <div>登录界面</div>
    <button onClick={this.returnfalse}>返回</button>
    </div>
)}

        else {
            return (
                <div>
                    <div>登录失败</div>
                    <button onClick={this.login}>登录</button>
                </div>


            )
}
    }
}