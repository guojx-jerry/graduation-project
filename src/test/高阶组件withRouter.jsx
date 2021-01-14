import React from 'react'
import {withRouter,Prompt} from "react-router-dom";


class MineDemo extends React.Component{

    state = {
        name:''
    }

    clickHandle=()=>{
        this.props.history.push("/")
    }

    render() {
        return(<div>
            <button onClick={this.clickHandle}>回到首页</button>
            <input type="text" value={this.state.name} onChange={(e)=>{this.setState({name:e.target.value})}}/>
            <Prompt when={ !!this.state.name } message={ '确认要离开嘛' }/>
        </div>)
    }
}

//高阶组件
export default withRouter(MineDemo)