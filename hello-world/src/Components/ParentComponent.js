import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         parentName: "parent"
      }

      this.greetParent = this.greetParent.bind(this)
    }

  greetParent(str){
    alert(`Hello ${this.state.parentName} from ${str}`)
  }

  render() {
    return (
      <div>
        <ChildComponent greetHandler = {this.greetParent}> </ChildComponent>
      </div>
    )
  }
}

export default ParentComponent
