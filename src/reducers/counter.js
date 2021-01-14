const counter = (state={num:0,},action) =>{
    switch (action.type){
        case "INCREMENT":
            return {num : state.num+1};
        case "DECREMENT":
            return {num : state.num-1};
            //深拷贝 复制一份新的去返回 以访监听器监听不到state的改变而不重新渲染界面
        default :return {...state}
    }
}

export default counter