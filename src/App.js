
import { useState } from 'react';
import Square from './Square';
import Input from './Input';
import './index.css'


function App() {
     const [colorvalue , setColorvalue] = useState('')
     const [hexvalue , setHexvalue] = useState('')
     const [isdarktext , setIsdarktext] = useState(true)
  return (
    <div>
      <Square 
        colorvalue={colorvalue}
        hexvalue={hexvalue}
        isdarktext={isdarktext}
      />
      <Input 
       colorvalue = {colorvalue}
       setColorvalue = {setColorvalue}
       setHexvalue = {setHexvalue}
       isdarktext = {isdarktext}
       setIsdarktext = {setIsdarktext}
      />
    </div>
  );
}

export default App;
