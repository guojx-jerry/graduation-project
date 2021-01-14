import React from 'react'


const ReactRouterPage2 =(props)=> {

    return(<div><div>page2</div>  <div>{props.match.params.id}</div></div>)



}
export default ReactRouterPage2