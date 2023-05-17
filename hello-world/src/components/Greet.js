import React from 'react'

// function Greet() {
// return <h1>Hello Manoj, First Functional component</h1>
// }

export const Greet = (props)=> {
    console.log(props);
    return <h1>Hello {props.name}, First Functional Component rendered</h1>
}
//export default Greet;