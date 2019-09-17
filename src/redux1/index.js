// console.log("redux");
import {createStore} from "redux";

function gg(state=0,action){
    switch (action.type) {
        case "qibing" :
            return state+5
        case "yidali":
            return state-2
        default:
            return 0
    }
}

let store = createStore(gg)

function listener(){
    let getCurrent = store.getState()
    console.log(`现在是${getCurrent}`);
}
store.subscribe(listener)



store.dispatch({
    type:"qibing"
})
store.dispatch({
    type:"yidali"
})


