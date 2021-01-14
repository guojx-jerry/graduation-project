import React from 'react';
import ReactDOM from 'react-dom';
import './test/guojx';
import Index from "./test/guojx";
import App from "./test/App"
import router from "./test/router";
import ReactRouterDemo from "./test/router";
import ReactRouterPage1 from "./test/router";
import Login from "./pages/login";
import 'react-mdui'
import Main from "./pages/main";
import FindAll from "./pages/findAll";
import  "./test/book"
import { createStore } from "redux";
import { Provider } from "react-redux";
import counter from './reducers/counter'
import App2 from "./test/App2";
import MineDemo from "./test/高阶组件withRouter";
import counterReact from "./reducers/counterReact";
import NewAccount from "./pages/newAccount";
import Transfer from "./pages/transfer";


// 创建store仓库
const store = createStore(counter);
store.subscribe(()=>{console.log(store.getState())})

//创建store仓库(ssm_React)
// const store = createStore(counterReact);



// ReactDOM.render(
//     <App
//
//     />,
//     document.getElementById('root')
// );

// const render=()=>{
//     ReactDOM.render(
//         <App2
//             onIncrement={ ()=>{
//                 store.dispatch({type:"INCREMENT"})
//             } }
//             onDecrement={()=>{
//                 store.dispatch({type:"DECREMENT"})
//             }}
//             value={ store.getState().num }
//
//         />,
//         document.getElementById('root')
//     );
// }


const render=()=>{
    ReactDOM.render(
       <App parent={this}/>,
        document.getElementById('root')
    );
}

render();
// store.subscribe(render);




