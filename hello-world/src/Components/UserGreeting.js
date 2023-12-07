import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }
    

  render() {
    // Method 1: If-Else
    // if(this.state.isLoggedIn){
    //     return(
    //         <div>Welcome Dhruv</div>
    //     )
    // } else{
    //     return(
    //         <div> Welcome Guest</div>
    //     )
    // }

    // Method 2: using variable
    // let message 
    // if (this.state.isLoggedIn){
    //     message = <div>Welcome Dhruv</div>
    // }
    // else{
    //     message = <div> Welcome Guest</div>
    // }
    // return <div>{message}</div>

    //Method 3: Ternary Operator
    return (
        this.state.isLoggedIn ? <div>Welcome Dhruv</div> : <div>Welcome Guest</div>
    )

    //Method 4: Short Circuit (Returns something if true, nothing if false)
    // return this.state.isLoggedIn && <div> Welcome Dhruv</div>
  }
}

export default UserGreeting
