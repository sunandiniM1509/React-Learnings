import React from 'react'
 

const Hello = () => 
{
    //using jsx
    /*return(
        <div>
            <h1>Have a great day</h1>
        </div>
    )*/
    return React.createElement(
        'div',
        {id: 'hello', className : 'tempClass'},
        React.createElement('h1',null,'Have a great day')
    )
}

export default Hello