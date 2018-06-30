import React, { Component } from "react";
import SayHello from "./components/SayHello";
import Border from "./components/Border";
import "./App.css";
class App extends Component {
  constructor(){
  super();
  this.state ={
    name: "Mungkorn Ryu",
    age: 22
  };
}

incrementAge(){
this.setState({age: this.state.age + 10})
}

decrementAge(){
  this.setState({age: this.state.age - 10})
}

render() {
  return (
    <div className="App">
    <SayHello data={this.state.name} age={this.state.age}/>
       <p>age, {this.state.age}</p>
       
       <div
         style={{
           width: this.state.age,
           border: 2,
           borderStyle: "solid",
           color: "#deab53"
         }}
       />
       <Border>
       <button onClick={() => this.incrementAge()}>เพิ่มอายุ</button>{" "}
       <button onClick={() => this.decrementAge()}>ลดอายุ</button>
       </Border>
     </div>
  );
}
}


export default App;
