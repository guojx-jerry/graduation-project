import React from 'react'

export default class App2 extends React.Component{
    render() {
        console.log(this.props)
        return (
            <div className="container">
                <h1 className="jumbotron-heading text-center">{this.props.value}</h1>
                <p className="text-center">
                    <button onClick={this.props.onIncrement} className="btn btn-primary">increment</button>
                    <button onClick={this.props.onDecrement} className="btn btn-success">decrement</button>
                </p>

            </div>
        );
    }
}