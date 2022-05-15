import React, { useState } from 'react'
import FindManager from './FindManager'
import ManagerItem from './ManagerItem'
import '../css/Manager.css';
import DoTest from "./DoTest"

export default function Manager () {
    const [data,setData] = useState([
        {id:1,name:"Bai Test 1",time:"60min",question: 10,topic1:"Chu De 1",topic2:"Chu De 2",topic3:"Chu De 3" },
        {id:2,name:"Bai Test 2",time:"50min",question: 5,topic1:"Chu De 1",topic2:"Chu De 2"},
        {id:3,name:"Bai Test 3",time:"70min",question: 8,topic1:"Chu De 1",topic2:"Chu De 2"},
        {id:4,name:"Bai Test 4",time:"120min",question: 20,topic1:"Chu De 1",topic2:"Chu De 2",topic3:"Chu De 3" }])
    
    const [filter,setFilter] = useState(data)
   
  
    const findTest =(value)=>{
        console.log(value)
        setFilter( data.filter(el => {
            console.log(el)
            return el.name == value

        }
        ))
       
    }

    
   
    return(
        <div>
            <div>
                <FindManager findTest={findTest}   />
            </div>
          <div>{filter.map(item =>{
              return <ManagerItem 
                    
                    id={item.id}
                    name={item.name}
                    time={item.time}
                    question={item.question}
                    topic1={item.topic1}
                    topic2={item.topic2}
                    topic3={item.topic3}
                    

                    />
            })}
          </div>
          
        </div>
    )
}





