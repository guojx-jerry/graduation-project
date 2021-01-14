import React from 'react'
import Child from "./child";

export default class Parent extends React.Component{
    state={
        title:''
    }

    clickHandle=(data)=>{
        this.setState({
            title: data
        })
    }

    render() {
        return(
            <div>
                Parent:{this.state.title}
                <Child title="副标题" onMyEvent={this.clickHandle} ></Child>
            </div>
        )
    }
}