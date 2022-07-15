import React, { Component } from 'react'

export default class Myclass extends Component {
    title = "Class Component";

    constructor(props){
        super(props);
        this.state={count:0}
    }
    updateState=()=>{
        this.setState({count:this.state.count+1})
    }
    empData = [
        {"id":1, "name":"A", "Salary": 12345},
        {"id":2, "name":"B", "Salary": 23451},
        {"id":3, "name":"C", "Salary": 34512},
        {"id":4, "name":"D", "Salary": 45123},
        {"id":5, "name":"E", "Salary": 51234},
    ]
  render() {
    return (
      <>
        <h1>Welcoem To {this.title}</h1>
        <p>The Counter is {this.state.count}</p>
        <button onClick={this.updateState}>Click Me</button>
        

        {/* <ul>
            {this.empData.map((val, index)=>
                <li key={index}>{val}</li>
            )}
        </ul> */}
      </>
    )
  }
}
