import React, { Component } from 'react'

export class Counter extends Component {

    constructor(props) {
      super(props)    
      this.state = {
         count:0
      }
    }

    // incrementCount () {
    //     this.setState({
    //         count:this.state.count+1
    //     }, ()=>{console.log('call back value', this.state.count)})
    //     console.log('Non call back value', this.state.count)
    // }

    incrementCount() {
        this.setState((state, props)=>({
            count:state.count+1
        }), ()=>{console.log('call back value', this.state.count)})
    }

    incrementFive() {
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
    }
    
  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={()=>this.incrementFive()}>Increment</button>

      </div>
    )
  }
}

export default Counter
