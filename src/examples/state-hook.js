//class,stateless function component
//state,lifecycle


//16.8:function+hook=>stateful function comp

import React, { Component, useState,useEffect} from 'react'
import ReactDOM from 'react-dom'


// class App extends Component {
//     constructor(props){
//         super(props);
//         this.state={
//             count:0,
//             text:''
//         }
//     }

//     componentDidMount(){
//         console.log('component didMount')
//     }

//     componentDidUpdate(){
//         console.log('component didUpdate')
//     }

//    render() {
//        return (
//            <div>
//                <p>Butona {this.state.count} kez tıkladınız</p>
//                <button onClick={()=>this.setState({count:this.state.count +1})}>+1</button>
//            </div>
//        )
//    }
// }

//  class App extends Component {
//     render() {
//         return (
//             <div>
//                 class component
//             </div>
//         )
//     }
// }





const App=(props)=>{
    const [count,setCount]=useState(props.count);
    const [text,setText]=useState(props.text);

    useEffect(()=>{
        console.log('text');
    },[text])

    //count
    useEffect(()=>{
        console.log('count')
    },[count])
    
    //componentDidMount
    useEffect(()=>{
        console.log('componentdidMount');
    },[])

    //componentDidMount(),componentDidUpdate
    useEffect(()=>{

        console.log('coponentDidMount-componentDidUpdate');

    })

    return(
        <div>
            <p>Butona {count} kez tıkladınız</p>
            <p>Girilen text:{text}</p>
            <button onClick={()=>setCount(count +1)}>+1</button>
            <button onClick={()=>setCount(count -1)}>-1</button>
            <button onClick={()=>setCount(props.count)}>Reset</button>
            <input type="text"  value={text} onChange={(e)=>setText(e.target.value)}/>
        </div>
    )
}

App.defaultProps={
    count:5,
    text:'deneme'
}






ReactDOM.render(<App/>,document.getElementById('root'));

