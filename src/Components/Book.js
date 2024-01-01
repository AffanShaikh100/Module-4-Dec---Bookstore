import React from "react";
import globalcontext from "../context/globalcontext";
import { useContext } from "react";
import { useState, useEffect } from "react";

const Book = () =>{

    const {harrydata,sherlockdata} =  useContext(globalcontext)
    let firstBook = harrydata[2];
    console.log(firstBook);
    let secondBook = sherlockdata[1];
    let thirdBook = harrydata[0];

   
    return(
        <div className="mainbookdiv">

            <div className="displaybook">

                 {firstBook && <div className="topshelf">
                     <div className="topimg">
                        <img className="topimg rotate" src= {firstBook.volumeInfo.imageLinks.thumbnail} alt=""/>
                     </div>
                     <div className="topbody">
                         <h1>{firstBook.volumeInfo.title}</h1>
                         <p>{firstBook.volumeInfo.description}</p>
                         <a href={firstBook.volumeInfo.previewLink} target="_blank">Now Read!</a>
                     </div>
                 </div>}
                 
                 {secondBook && <div className="topshelf displaybook2">
                     <div className="topimg">
                        <img className="topimg rotate" src= {secondBook.volumeInfo.imageLinks.thumbnail} alt=""/>
                     </div>
                     <div className="topbody">
                         <h1>{secondBook.volumeInfo.title}</h1>
                         <p>{secondBook.volumeInfo.description}</p>
                         <a href={secondBook.volumeInfo.previewLink} target="_blank">Now Read!</a>
                     </div>
                 </div>}

                 {thirdBook && <div className="topshelf displaybook3">
                     <div className="topimg">
                        <img className="topimg rotate" src= {thirdBook.volumeInfo.imageLinks.thumbnail} alt=""/>
                     </div>
                     <div className="topbody">
                         <h1>{thirdBook.volumeInfo.title}</h1>
                         <p>{thirdBook.volumeInfo.description}</p>
                         <a href={thirdBook.volumeInfo.previewLink} target="_blank">Now Read!</a>
                     </div>
                 </div>}
            </div>

            <p>More Books</p>

            <div className="booksdiv">
                 {
                    harrydata.map((item)=>(
                        <div className="book">
                            <img className="bookimg" src={item.volumeInfo.imageLinks.thumbnail} alt={item.volumeInfo.title}/>
                        </div>
                        
                    ))
                 }
            </div>

            <div className="booksdiv">
                 {
                    sherlockdata.map((item)=>(
                        <div className="book">
                            <img className="bookimg" src={item.volumeInfo.imageLinks.thumbnail} alt=""/>
                        </div>
                        
                    ))
                 }
            </div>
        </div>
    )

}

export default Book