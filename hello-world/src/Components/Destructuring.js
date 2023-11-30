import React from "react";

const Destructuring = props => {
    const {name, lastName} = props
    return (
        <div>
            <h1> Welcome {name} {lastName} </h1>
        </div>
    )
}

export default Destructuring