
const ADD_NUM = "zengjia"
const RE_NUM = "shanchu"

export function reduces(state=0,action){
    switch (action.type) {
        case ADD_NUM :
            return state+5
        case RE_NUM:
            return state-2
        default:
            return 500
    }
}



export function add(){
    return{
        type:ADD_NUM
    }
}
export function remove(){
    return{
        type:RE_NUM
    }
}


