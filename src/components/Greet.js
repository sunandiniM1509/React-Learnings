import React from 'react'
 
/*function Greet()
{
    return <h1>Hello Team</h1>
}*/

const Greet = (props) => 
{
    console.log(props)
return <h1>I like to code in {props.name} and I am in {props.level} level </h1>
}
export default Greet