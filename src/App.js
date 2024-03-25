import React,{useEffect, useState} from 'react';
import { FaTrashAlt } from 'react-icons/fa';

function App(props) {

const [box,setbox]=useState([0,0,0])
const[statearr,setstatearr]=useState(["play cricket","play football","play chess"])
const[maparr,setmaparr]=useState([
  
    {"play cricket":0},{"play football":0},{"play chess":0}
  
])



const handleclick=(val) =>{

  const indexval=parseInt(val.i,10)

  var int_box=box

  if(int_box[indexval]===0){
    int_box[indexval]=1
  }
  else{
    int_box[indexval]=0
  }

  console.log(int_box)

  setbox(int_box)

  const new_mapped =statearr.map((key,index) =>{
    return{
     [key]:box[index]
    }
  })
  setmaparr(new_mapped)

  
}


const handledelete=(val) =>{

const display1=statearr.filter((id)=> id!==val)
const truthrestrict=[statearr.indexOf(`${val}`)]
const changedbox=box.filter((_,index)=>!truthrestrict.includes(index))

setbox(changedbox)
setstatearr(display1)


}


useEffect(()=>{

const new_mapped =statearr.map((key,index) =>{
  return{
   [key]:box[index]
  }
})

setmaparr(new_mapped)

},[statearr,box])


  return (
    <div className='App'>
      <ul>
      
        {statearr.length?statearr.map((item,i) => 
        (
           
            <>
                <li id={i}>{item}</li>

                <input type="checkbox" id={item} onClick={()=>handleclick({i})} checked={box[i]}/>

                {(maparr[i][`${item}`])?<FaTrashAlt role="button" onClick={()=>handledelete(`${item}`)}/>:null}

              </>
          
          
        )) : <>{"No elements found"}</>}
      </ul>

      
    </div>
  );
}

export default App;