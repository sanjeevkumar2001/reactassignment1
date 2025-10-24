import Item from "./todoitem";
function List(props){
   
    return(
       
        <>  
            
            {props.data.map(task=> <Item key = {task.id} data1={task}></Item>)} 
            
             
        </>
    )
}
export default List;