// importing images
import Angry from"../images/Emoji1.png"
import Boring from"../images/Emoji2.png"
import Happy from"../images/Emoji3.png"
import Tired from"../images/Emoji4.png"
import logo from "../images/MSPLogo.svg"
import logo2 from "../images/mainImage.png"
import './App.css';
import Emotions from "../Emotions/Emotions"
import { useState } from "react"
import Record from "../Record/Record"

function App() {
  const images =[Angry,Boring,Happy,Tired];
  const[Records ,setRecords] = useState([]);
  const[Text ,setText] = useState();
  const deleteHandlar = (e ,deletedindex)=>{
   setRecords(Records.filter((obj ,idx)=> deletedindex !== idx ))
  }

  // const MyRecords =[];
  const recordData =()=>{
    const emoji = document.querySelector("input[type='radio']:checked");
    if(Text && emoji){
      // MyRecords.push({text:text.value ,emoji:images[emoji.value]});
      setRecords([...Records,{text:Text ,emoji:images[emoji.value]}]);
      // console.log(document.querySelector("input[type='radio']:checked"))
      // console.log(MyRecords);
      setText("");
      emoji.checked=false;
    }
    else{
      alert("please enter the text and emoji ");
    }
    }
    return (
      <div className="App">
        <header  className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>RECORDING FEELINGS</h2>
        </header>
        <section className="content">
          <div className="right">
              <input className="text" type= "text"id="text1" placeholder="Write your feelings here" value={Text} onChange={(e)=>setText(e.target.value)} required></input>
              <h4>Select Emoji</h4>
              <div className="myemojisbutton">
                <div className="myEmojis">
                  <Emotions images={images}/>
                </div>
                <button className="btn1" id="btn1" onClick={recordData} >Record</button>
                </div>
              <img className="logo2" src={logo2} alt="logo2"/>
          </div>
              <div id="left" className="left">
               <Record list={Records} deletefunction={deleteHandlar}/>
              </div>
        </section>
      </div>
    );
}

export default App;

