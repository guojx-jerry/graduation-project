import React from 'react'


export default class KeyDemo extends React.Component{
    constructor() {
        super();
        this.state = {
            account :[
                {
                    name:'guo',
                    age:'20',
                    sex:'男'
                },
                {
                    name:'ljf',
                    age:'20',
                    sex:'男'
                },
                {
                    name:'ljq',
                    age:'20',
                    sex:'男'
                },
                {
                    name:'machael',
                    age:'20',
                    sex:'男'
                },
                {
                    name:'tom',
                    age:'20',
                    sex:'男'
                },

            ]
        }
    }

    clickHandler=()=>{
        this.setState({
            account:this.state.account.concat({
                name:'abc',
                age:'20',
                sex:'男'
            })
        })
    }

    render() {
        return(
    <div>
        <ul>{this.state.account.map((account,index)=>
            <li key={index}>
                <ol>{account.name}</ol>
                <ol>{account.age}</ol>
                <ol>{account.sex}</ol>
            </li>
        )}

        </ul>
        <button onClick={this.clickHandler}>增加</button>
    </div>
        )
    }
    }
