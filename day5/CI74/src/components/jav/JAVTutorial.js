import React, { useState } from "react";
import JAVCreateForm from "./JAVCreateForm";
import JAVItem from "./JAVItem";

export default function JAVTutorial() {

    const [data, setData] = useState([
        { id: 1, name: 'JAV001', date: '2022/05/06', watched: true },
        { id: 2, name: 'JAV002', date: '2022/05/07', watched: false },
        { id: 3, name: 'JAV003', date: '2022/05/08', watched: false },
    ]);

    const addItem = (name) => {
        console.log("Tạo thêm 1 item với name là " + name);
        
        // tạo 1 item mới
        const newItem = {
            id: Date.now(),
            name: name,
            date: new Date().toISOString(),
            watched: false
        };

        // data.push(newItem); // ở đây chúng tôi ko làm thế

        // tạo 1 mảng mới: gồm tất cả phần tử cũ của data + newItem
        setData([...data, newItem])

    }

    const deleteItem = (itemId) => {
        let newArr = []
        for (let i = 0; i < data.length; i++){
            console.log(data[i])
            if (data[i].id !== itemId){
                newArr.push(data[i])
            }
        }

        setData(newArr)
    }
    const watchedItem = (itemId) =>{
        const newData = {...data}
       for (let item of data){
           if(item.id == itemId) item.watched = true;
       }
        setData(newData);
    }
    const editItem = (itemId,newName) => {
        const newData = {...data}
        for (let item of data){
            if(item.id == itemId) {item.name = newName;}
        }
         setData(newData);

    }

    return (<div className="jav-tutorial">
        <h1>Japanese Anti Virus</h1>
        <JAVCreateForm onAddItem={addItem}  />


        <div className="jav-list">
            {data.map(jav => {
                return <JAVItem 
                    id={jav.id} 
                    name={jav.name} 
                    date={jav.date} 
                    watched={jav.watched} 
                    onDeleteItem={deleteItem} 
                    onWatchedItem={watchedItem}
                    onEditItem= {editItem}
                />
            })}
        </div>

    </div>);
}