import React from "react";

const Hello = () => {
    //return <h1> Hello Dhruv</h1>

    return React.createElement(
        'div',
        {id: 'hello', className: 'dummyClass'},
        React.createElement('h1', null, 'Hello Dhruv'))
}

export default Hello