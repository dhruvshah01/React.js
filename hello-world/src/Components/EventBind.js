import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }

      this.clickHandler = this.clickHandler.bind(this)
    }

    /*clickHandler(){
        this.setState({
            message: "GoodBye"
        })
    }*/

    // Method 4
    clickHandler = () =>{
        this.setState({
            message: "GoodBye"
        })
    }
    
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* Method 1: Event Binding in Render Method
        <button onClick={this.clickHandler.bind(this)}> Click</button> */} 


        {/* Method 2: Using Arrow/Lambda Expression
        <button onClick={() => this.clickHandler()}> Click</button>  */}

        {/* Method 3 (Best Approach): Constructor Based Event Binding */}
        <button onClick={this.clickHandler}> Click</button>

      </div>
    )
  }
}

export default EventBind 