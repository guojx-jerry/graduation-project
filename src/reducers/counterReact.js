import {connect} from 'react-redux'

const counterReact = (state = {value:0}
,action) =>{
    switch (action.type){
        case "INCREMENT":
            return state.value+1;
        case "DECREMENT":
            return state.value-1;

        default :return state
    }
}

const mapStateToProps = (state) => {
    return {
        value: state.value
    }
}

const mapDispatchToProps=(dispatch)=> {
    return {
        onIncrementClick: () => dispatch({type:'INCREMENT'}),
        onDecrementClick: () => dispatch({type:'DECREMENT'})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(counterReact)