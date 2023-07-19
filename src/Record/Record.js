import React ,{Fragment} from "react"
import "./Record.css"

const Record =({list,deletefunction}) =>{
    return(
            <Fragment>
            {
            list.map((r ,idx) => {
                console.log(r)
                return(
                    <div key={idx} className="therecord">
                    <img src={r.emoji} alt="Emoji"/>
                    <p>{r.text}</p>
                    <button onClick={(e)=>deletefunction(e ,idx)}>Delete</button>
                </div>
                );

                
            })}
            </Fragment>);
}
export default Record;