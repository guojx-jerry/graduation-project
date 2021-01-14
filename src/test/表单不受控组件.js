import React from 'react'

export default class UnControlForm extends React.Component{
    constructor(props) {
        super(props);
        this.name = React.createRef();
        this.name1 = React.createRef();
        this.name2 = React.createRef();
        this.name3 = React.createRef();
    }
    clickHandler=()=>{
        console.log(this.name.current.value)
        console.log(this.name1.current.value)
        console.log(this.name2.current.value)
        console.log(this.name3.current.value)
    }

    render() {
        return(

                <div>
                    <input type="text" ref={this.name}/>
                    <input type="text" ref={this.name1}/>
                    <input type="text" ref={this.name2}/>
                    <input type="text" ref={this.name3}/>
                    <button onClick={this.clickHandler}>提交</button>
                </div>


        )
    }

}