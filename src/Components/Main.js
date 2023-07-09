import { useState } from 'react'


function Main(props) {
  const [data, setData] = useState("");
    const writing = (e) =>{
      setData(e.target.value);
    }

    const converttoUp = () => {
      var newdata = [];
      var words = data.split(" ");
      words.forEach(element => {
        element = element.toUpperCase();
        newdata.push(element);
      });
      setData(newdata.join(" "));
      props.showAlert("Converted to Upper Case","success");
    }

    const converttoLp = () => {
      var newdata = [];
      var words = data.split(" ");
      words.forEach(element => {
        element = element.toLowerCase();
        newdata.push(element);
      });
      setData(newdata.join(" "));
      props.showAlert("Converted to Lower Case","success");
    }

    const capatalizeText = () =>{
      var capatilizedText = [];
      var words = data.split(" ");
      //consol43.log(words);
      words.forEach(element => {
        capatilizedText.push(element[0].toUpperCase()+element.slice(1,element.length));
        //console.log(capatilizedText);
      });
      setData(capatilizedText.join(" "));
      props.showAlert("Text Capatilized","success");
    }

    const reverseText = () => {
      var newData = [];
      var words = data.split(" ");
      words.forEach(element => {
        var word = element.split("");
        word = word.reverse();
        newData.push(word.join(""));
      });
      newData.reverse();
      setData(newData.join(" "));
      props.showAlert("Text Reversed","success");
    }

    const trimText = () =>{
      setData(data.replace(/\s+/g,' ').trim());
      console.log(data);
      props.showAlert("Extra spaces has been removed","success");
    }

 
    
  return (
    <>
    <div><textarea className="form-control" id="textarea" onChange={writing} rows="15" value={data}></textarea></div>
    <div className='d-flex justify-content-center my-3'>
        <div className='p-2'>
        <button className='btn btn-primary mx-2' onClick={converttoUp} disabled={data.length===0} style={{cursor: data.length===0?'not-allowed':'pointer'}}>Convert to UpperCase</button>
        </div>
        <div className='p-2'>
        <button className='btn btn-primary mx-2' onClick={converttoLp} disabled={data.length===0} style={{cursor: data.length===0?'not-allowed':'pointer'}}>Convert to LowerCase</button>
        </div>
        <div className='p-2'>
        <button className='btn btn-primary mx-2' onClick={()=>{
          setData("");
          props.showAlert("Text Cleared","success");
        }} disabled={data.length===0} style={{cursor: data.length===0?'not-allowed':'pointer'}}>Clear All</button>
        </div>
        <div className='p-2'>
        <button className='btn btn-primary mx-2' onClick={capatalizeText} disabled={data.length===0} style={{cursor: data.length===0?'not-allowed':'pointer'}}>Capatilize Text</button>
        </div>
        <div className='p-2'>
        <button className='btn btn-primary mx-2' onClick={reverseText} disabled={data.length===0} style={{cursor: data.length===0?'not-allowed':'pointer'}}>Reverse Text</button>
        </div>
        <div className='p-2'>
        <button className='btn btn-primary mx-2' onClick={()=>{
          var copyText = document.getElementById("textarea");
          copyText.select();
          copyText.setSelectionRange(0, 99999);
          navigator.clipboard.writeText(copyText.value);
          props.showAlert("Text copied to clipboard","success");
        }} disabled={data.length===0} style={{cursor: data.length===0?'not-allowed':'pointer'}}>Copy Text</button>
        </div>
        <div className='p-2'> 
        <button className='btn btn-primary mx-2' onClick={trimText} disabled={data.length===0} style={{cursor: data.length===0?'not-allowed':'pointer'}}>Remove Extra Spaces</button>
        </div>      
        </div>
        <div id="summary">
          <h3>Your Text Summary</h3>
          <p><span>{data===undefined?0:data.split(/\s+/g).filter(word =>{ return word.length!==0;}).length}</span> words and <span>{data.length}</span> characters</p>
        <p><span >{data.length===0?0:data.split(/\s+/g).filter(word => {return word.length!==0}).length*0.08}</span> minutes to read</p>
        </div>
    </>
  )
}

export default Main