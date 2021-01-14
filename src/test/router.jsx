import React from 'react'

export default class ReactRouterPage1 extends React.Component{
    constructor(props) {
        super(props);
        this.state={}
    }


    render() {
        console.log(this.props)
        return(<div>page1：{this.props.location.state.show}</div>)
    }
}