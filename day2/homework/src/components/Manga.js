import React from "react";

export default function Manga(props){
    return (
        <div className="manga-container">
            <img className="image" src={props.photo} alt="naruto" /><br/>
                
                <div>
                    <b className="mangaName" >Naruto{props.name}</b> 
                    <p className="viewCount" >190748{props.viewCount}</p>
                    <p className="commentCount" >32832{props.commentCount}</p>
                    
                </div>
                <div className="chapter-date">
                    <p className="lastestChapter" >Chapter 115{props.lastestChapter}</p><br/>
                    <p className="dateModified" >26/4/2022{props.dateModified}</p>
                </div>
                    
            

        </div>
    )
}