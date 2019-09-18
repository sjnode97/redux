import React,{Component} from 'react';

export default class App extends Component{
    render(){

        let {store,add,remove}=this.props
        // console.log(store,add,remove)
        return (

            <div className="App">
                <input type="button"
                defaultValue={"添加"}
                       onClick={()=>{
                           store.dispatch(add())
                       }}
                />
                <input type="button"
                       defaultValue={"减少"}
                       onClick={()=>{
                           store.dispatch(remove())
                       }}
                />
                <h2>{store.getState()}</h2>
            </div>
        )
    }

}


