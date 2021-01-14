import React from 'react'

export default class Child extends React.Component{

    clickHandle=()=>{
        this.props.onMyEvent('主标题')
    }
    render() {
        return(
            <div>
                Child:{this.props.title}
                <button onClick={this.clickHandle}>回调函数</button>
            </div>
        )
    }
}