import React, { useState } from 'react'
import TitleItem from './TitleItem'
import TitleForm from './TitleForm'

export default function Title (){
    const [data,setData] = useState([
        {id:1, name: "Title 1", date: "2020/05/10 15:30:00", like: 1030, content:'Hello' },
        {id:2, name: "Title 2", date: "2020/05/10 15:30:00", like: 1054,content:'Hi' },
        {id:3, name: "Title 3", date: "2020/05/10 15:30:00", like: 1064,content:'Goodbye'}
    ])

    const addNewForm = (name,content) =>{
        console.log('tao new form')
        const newTitle  = {
            id: Date.now(),
            name: name,
            date: new Date().toString(),
            like: Date.now(),
            content: content



        };
        setData([newTitle,...data])
    }

    const titleEdit = (titleId,newName) => {
        const newData = [...data]
        for(let item of data){
            if(item.id == titleId){
                item.name = newName;
            }
        }
       
        setData(newData)
    }

    

    return (
        
    <div>
        <div className="form-name">
            <h1 >Hello Post</h1>
            <TitleForm addForm={addNewForm}/>

        </div>
        <div>
            {data.map(title => {

                return <TitleItem
                    id={title.id}
                    name={title.name}
                    date={title.date}
                    like={title.like}
                    content={title.content}
                    editTitle={titleEdit}/>
                    

        })}</div>
        
    </div>

    )

}