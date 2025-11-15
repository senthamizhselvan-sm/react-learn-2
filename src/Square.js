import React from 'react'

const Square = ({colorvalue , hexvalue , isdarktext}) => {
  return (
   <section
     className='square'
     style={{
        backgroundColor : colorvalue,
        color : isdarktext ? "#000" : "#FFF" 
     }}>
       <p>{colorvalue ? colorvalue : "empty value"}</p>
       <p>{hexvalue ? hexvalue : null }</p>
   </section>
  )
}
Square.defaultProps = {
    colorvalue : "empty color value"
}
export default Square