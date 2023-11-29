import React from "react";

//function Greet(){
  //  return <h1> Hello</h1>
//}

//const Greet = () => <h1> Hello Dhruv</h1>

const Greet = (props) => {
  return (
    <div>
      <h1> Welcome {props.name} {props.lastName}</h1>
        {props.children}
   </div>
  )
}
export default Greet