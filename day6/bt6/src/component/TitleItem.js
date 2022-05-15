import React,{ useState } from 'react'

// const d = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet dui feugiat, auctor velit eget, euismod nisi. Sed dictum quam quis maximus scelerisque. Sed nec condimentum lacus. Fusce varius volutpat neque pulvinar suscipit. Mauris nec ipsum ac mauris tincidunt efficitur. Fusce sit amet porttitor massa, quis molestie odio. Ut ultricies urna sed sagittis vulputate. Pellentesque luctus luctus lorem, congue pellentesque enim dictum congue. Sed varius, enim at aliquet fermentum, erat tortor pharetra libero, sed suscipit purus ante eget sem."
export default function TitleItem ({name,date,id,content,like,editTitle }){
    const [edit,setEdit] = useState(false)
    const [newName, setNewName] = useState('');
    const [likeTitle,setLikeTitle] = useState(like)
    
    
    const saveEdit = (event) => {
        
        editTitle(id,newName)
        setEdit(false)
        setNewName('')

    }

    const editForm = () =>{
        
        setEdit(true)
    }
    
    const likeButton = (event) => {
        setLikeTitle (likeTitle + 1)
    }


    return (

        <div className='title-item'>
            <div className="title-info">
                {edit ? <div><input type="text" onChange={(event) => setNewName(event.target.value)}/></div> :<h2> {name} </h2>}  
                <span>{date}</span>
            </div>
            <div className="title-content">
                {content}
            </div>
            <div className="title-like">
                {likeTitle}
            </div>
            <div className="title-button">
                <button className="button-like" onClick={likeButton} >Like</button>
                {edit ? <button className="button-edit" onClick={saveEdit}>Save</button> : <button className="button-edit" onClick={editForm}>Edit</button>}
            </div>

        </div>
    )
}