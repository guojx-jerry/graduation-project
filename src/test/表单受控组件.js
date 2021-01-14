import React from 'react'

export default class FormComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            name1:'',

        }}

        onChangeHandler=(e)=>{
        this.setState({name1:e.target.value})
        }

        onSubmitHandler=(e)=>{
        e.preventDefault();
        console.log(this.state.name1);
        }


        render() {
        return(
            <form onSubmit={this.onSubmitHandler}>
                <input type="text" value={this.state.name1} onChange={this.onChangeHandler}/>
                <input type="submit"  name="提交"/>
            </form>
        )
        }

}