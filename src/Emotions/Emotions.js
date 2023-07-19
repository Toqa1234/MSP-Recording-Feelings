import React from "react"
import App from "../App/App"
import "./Emotions.css"

 function Emotions({images}){
  console.log(images);
  return(
    <>
    {
      images.map((Image ,idx)=>
      (<div key={idx}>
        <input type="radio" name="Emothion" id={idx} value={idx}/>
        <label htmlFor={idx}>
        <img src={Image} alt="Emojis"/>
        </label> 
      </div>)
      )
    }
    </>
  );
}
export default Emotions;