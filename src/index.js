import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import "./redux1/index"
import {createStore} from "redux";
import {reduces,add,remove} from "./redux2";
const store = createStore(reduces)

render()
function render(){
    ReactDOM.render(
        <App
            store={store}
            add={add}
            remove={remove}
        />,
        document.getElementById('root')
    );
}
store.subscribe(render)
