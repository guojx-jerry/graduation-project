import React from 'react'

export default class App3 extends React.Component{
    render() {
        const {value,onIncrement,onDecrement} = this.props

        return (
            <div className="container">
                <h1 className="jumbotron-heading text-center">{value}</h1>
                <p className="text-center">
                    <button onClick={onIncrement} className="btn btn-primary">increment</button>
                    <button onClick={onDecrement} className="btn btn-success">decrement</button>
                </p>

            </div>
        );
    }
}