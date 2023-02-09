import { useState } from "react";

function FormControlled() {
  const [inputs, setInputs] = useState({});

const onchange = (event) =>{
  const name = event.target.name;
  // console.log(name)
  const value = event.target.value;
  // console.log(value)
  setInputs(values => ({...values, [name]: value}))
}
  
const onsubmit = (event)=>{
event.preventDefault();
console.log(inputs); 
  }

  return (
    <div className="App">
      <h1>EXAMPLE OF CONTROLLED FORM HANDLING</h1>
     <form onSubmit={onsubmit}>

      <label>Enter your name:
      <input type="text" onChange={onchange} name="username"  />
      </label> <br /> <br />

      <label>Enter city:
      <input type="text" onChange={onchange} name="city"  />
      </label> <br /> <br />
       
      <select name="myCar"  onChange={onchange}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select> <br /> <br />
      
      <textarea name="textarea" onChange={onchange} />

      <input type="submit" />
     </form>
    </div>
  );
}

export default FormControlled;
