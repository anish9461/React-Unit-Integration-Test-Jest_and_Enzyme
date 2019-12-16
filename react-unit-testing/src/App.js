import React from "react";
import logo from "./logo.svg";
import "./App.css";

// class App extends React.Component {
// constructor(props){
//   super(props)
//   this.state={
//     count: 0
//   }
//   this.onClick=this.onClick.bind(this)
// }

// onClick(){
//   this.setState({count : this.state.count + 1})
// }

// render(){
//   return (
//     <div className="App">
//       <h1>The Count is {this.state.count}</h1>
//       <button onClick={this.onClick}>Increment Counter</button>
//     </div>
//   );
// }
// }


class App extends React.Component{
constructor(props){
  super(props)
  this.state ={
    counter: 0
  }
}

  render(){
    return(
      <div data-test="component-app">
        <h1 data-test="counter-display">The counter is currently {this.state.counter}</h1>
        <button data-test="increment-button" onClick={() => this.setState({counter : this.state.counter + 1})}>Increment Counter</button>
      </div>
    )
  }
}


export default App;
