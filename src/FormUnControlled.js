import {useRef} from "react";

export default function FormUnControlled(){
    const inputValues = useRef();

    function handleClick(e){
      e.preventDefault();
      console.log(inputValues.current.value);
      inputValues.current.focus();
      inputValues.current.value = "";
    }
    return(
        <div>
       <h1>EXAMPLE OF UNCONTROLLED FORM HANDLING</h1>
       <input type="text" ref={inputValues} />
       <input type="submit" onClick={handleClick}/>
       </div>
    )
}