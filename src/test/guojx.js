import React , {Component} from 'react'
import axios from 'axios'


class Index extends Component{
    constructor() {
        super();
        this.state = {


    }}
    save_buttonClick = ()=>{
        let name = document.getElementById("name").value;
        let money = document.getElementById("money").value;
        // let data = {
        //     'name':name,
        //     'money':money
        axios({
            method: 'post',
            url: '/account/saveAccount',
            data: {
               name:name,money:money
            },
            timeout: 50000,

        });

    }



    render() {
        return(
            <div>
                <tr>
                    <td>名字</td>
                    <td><input type="text" name="name" id="name" /></td>
                    <td>金额</td>
                    <td><input type="text" name="money" id="money" /></td>
                    <td><input type="button" value="保存" id="save_button" onClick={()=>{this.save_buttonClick()}}/></td>
                </tr>

            </div>
        )
    }
}
export default Index;