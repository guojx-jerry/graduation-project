import React from "react";

export default class ComponentLife extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            num : 10
        }

    }
    buttonclick=()=>{
      this.setState({
          num:this.state.num+=100000
      })
    }
    componentWillMount() {
        console.log("componentWillMount")
    }
    componentDidMount() {
        console.log("componentDidMount");
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("shouldComponentUpdate")
        return true;
    }
    componentWillUpdate(){
        console.log("componentWillUpdate")
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate")
    }

    render() {
        return(
            <div>
                <div>num={this.state.num},text={this.props.text}</div> <button onClick={this.buttonclick}>修改num</button>
            </div>
        )
    }
}
