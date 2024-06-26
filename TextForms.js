import React , {useState} from 'react'    // import useState hooks


export default function Textform(props) {
    const handleOnUpparCase =()=>{
        // console.log("uppar case clicked" + text);
         let newText = text.toUpperCase()
        setText(newText);
        props.showAlert("Converted to upper case" , 'success');
    }
     const handleOnLowerCase = ()=>{
        let NewText = text.toLowerCase()
         setText(NewText);
         props.showAlert("Converted to lower case" , 'success');
     }
     const handleOnClearCase = ()=>{
       let New = ""
        setText(New)
        props.showAlert("  Text Cleared" , 'success');
     }
    
      const handleCopy=()=>{
          var text = document.getElementById("my-box")
          text.select();
          navigator.clipboard.writeText(text.value);
          props.showAlert("text coppied" , 'success');
      }
       const handleExtraSpaces=()=>{
         let Text = text.split(/[ ]+/);
         setText(Text.join(" "));
         props.showAlert("Extra-space removed" , 'success');
       }

    const handleOnchange =(event)=>{
        // console.log("On Change");
        setText(event.target.value);     // for type in the text-area
       
    }

           // use useState hooks .
       const [text , setText] = useState(" ");  // text = state , setText = function h jise kabhi b update kane ke liye use kar sakte h .
    // setText("set/update new text here");   correct way to change the state.
    // text= "new text "  wrong way to change the state .
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#013220'}}>
        <h1> {props.heading}</h1>
      <div className="mb-3">
  {/* <label for="my-box" class="form-label">{props.heading}</label> */}
  <textarea className="form-control" value={text}  onChange={handleOnchange} style={{backgroundColor:props.mode==='light'?'white':'grey',
     color:props.mode==='dark'?'white':'#042743'}} id="my-box" rows="7"></textarea>
</div>
<button type="button" className="btn btn-primary mx-2" onClick={handleOnUpparCase}>Convert to uppar case .</button>
<button type="button"  className="btn btn-primary mx-2" onClick={handleOnLowerCase}>Convert to lower case .</button>
<button type="button"  className="btn btn-primary mx-2" onClick={handleOnClearCase}>Clear case .</button>
<button type="button"  className="btn btn-primary mx-2" onClick={handleCopy}>Copy .</button>
<button type="button"  className="btn btn-primary mx-2" onClick={handleExtraSpaces}> Remove Extra Spaces .</button>
    </div>

     <div className="container my-4" style={{color:props.mode==='dark'?'white':'#013208'}}>
       <h3 className='my-3'> Your text summary .</h3>
         {/* // for count words and charcter in text-area */}
       <p> <b> {text.split(" ").length} and  {text.length} charcter . </b></p>
         {/* calculate the time of read words .  */}
       <p> <b> { 0.008 * text.split(" ").length} Minutes read </b></p>

         <h2> Preview</h2>
         <p> <b> {text.length>0?text:"Enter something in the text above to preview it here."}</b> </p>
     </div>
    </>
  );
  
     }
     // props ko hum component me pass karte h or vo render hoti hai 
// state ek component ko belong karti h 