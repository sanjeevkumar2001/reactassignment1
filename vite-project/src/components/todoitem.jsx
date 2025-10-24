import { useState } from "react";
import App from "../App";

function Item(props){
    const[del,setdel] = useState(props.data1.text);
    const[button,showbutton] = useState(true);
    const[editbutton,seteditbutton] = useState("");
    const[deletebutton,showdeletebutton] = useState(true);
    const[completed,setcompleted] = useState(false);
    
    
    function deleteItem(){
         setdel("");
         showdeletebutton(!deletebutton);
         showbutton(!button);
    }
    function editItem(){
        
         showbutton(!button);
       
    }
    function addItem1(){

        setdel(editbutton);
        showbutton(!button);
    }
    function completedItem(){
        setcompleted(!completed)
        
    }
    if(button){
        return  (
          
        <>
          

           <div className="a1">
                 
                 <h1>{completed ? `${props.data1.id}) ${del} ✅` : `${props.data1.id}) ${del}`}</h1>
                 
                 <button className="b1" onClick={deleteItem}>Delete Item</button>
                 <button className="b1" onClick={editItem}>Edit Item</button>
                 <button className="b1"  onClick={completedItem}> <img src="data:image/png;base64,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" width="120px"></img> </button>
            
                 
            </div>
          
        </>
    )
}
    else if(!deletebutton){
        return(
            <>
                
            </>
        )
    }
    
    else {
        return(
            <div className="c1">
            <input type="text"  className="b2" onChange={(e) => seteditbutton(e.target.value)} />  
       
            
            
            <button className="b1" onClick={addItem1}>ADDITEM</button>
           
            </div>
        )

      
    }
        
    
    
}
export default Item;