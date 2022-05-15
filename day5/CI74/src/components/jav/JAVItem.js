import React,{ useState } from 'react';
import "../../css/JAVItem.css";

export default function JAVItem({ name, date, watched, id, onDeleteItem, onWatchedItem, onEditItem  }) {

    const [isEditing, setIsEditing] = useState(false)
    const [newName, setNewName] = useState('');

    const remove = (event) => {
        onDeleteItem(id);
    }
    const watch= (event) =>{
       
        onWatchedItem(id)
    }
    const edit = (event) =>{
        onEditItem(id,newName);
        setIsEditing(false);
        setNewName('')

    }
    const enableEdit = ()=>{
        setIsEditing(true)
    }

    

    return (<div className="jav-item">
        <div className="item-info">{
            isEditing ? <div><input type = "text" onchange={(event) => setNewName(event.target.value)}/></div> 
            : <b className="item-name">{name}</b>}
            <i className="item-date">{date}</i>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <code>{watched ? 'watched' : ''}</code>
        </div>

        <div className="item-action">

            {isEditing ? <button onClick={edit}>Save</button> : <button onclick ={enableEdit}>Edit</button>}
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={watch}>Xem</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={remove}>Xóa</button>
        </div>
    </div>);
}