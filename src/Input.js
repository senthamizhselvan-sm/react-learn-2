import React from 'react';
import colorNames from 'colornames'

const Input = ({colorvalue , setColorvalue , setHexvalue , isdarktext , setIsdarktext}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
       <label>Add color name :</label>
       <input
           autoFocus
           type='text'
           placeholder='color'
           required
           value={colorvalue}
           onChange={(e) => {
             setColorvalue(e.target.value);
             setHexvalue(colorNames(e.target.value))
           }}
       ></input>

       <button
          type='text'
          onClick={() => setIsdarktext(!isdarktext)}
       >  toggle color
       </button>
    </form>
  )
}

export default Input