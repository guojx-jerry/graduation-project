import React from 'react'

export default class Book extends React.Component{
    render() {
        return(
            <div>
                Book
                {/*子组件*/}
                {this.props.children}
            </div>

        )
    }
}