import React,{useState} from 'react'

export default function TitleForm({addForm}){
    const [name,setName] = useState();
    const [content,setContent] = useState();
    const createForm = (event) => {
        event.preventDefault();
        if(!name || !content){
            alert("nhap day du")
            return
        }
      addForm(name,content) 
    //   addForm(content)
     
    }

    return (<form className="form" onSubmit={createForm}>
        <div><input className="input1" type="text" onChange={(event)=>setName(event.target.value)}></input></div>
        <div><input className="input2" type="text" onChange={(event)=>setContent(event.target.value)}></input></div>
        <div><button className="form-button">Add</button></div>
        </form>
            
        )
}