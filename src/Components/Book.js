import React from "react";
import globalcontext from "../context/globalcontext";
import { useContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Book = () =>{

    const {harrydata,sherlockdata} =  useContext(globalcontext)

    let firstBook = harrydata[2];
    let secondBook = sherlockdata[1];
    let thirdBook = harrydata[7];

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
                         <button>Now Read!</button>
                     </div>
                 </div>}
                 
                 {secondBook && <div className="topshelf">
                     <div className="topimg">
                        <img className="topimg rotate" src= {secondBook.volumeInfo.imageLinks.thumbnail} alt=""/>
                     </div>
                     <div className="topbody">
                         <h1>{secondBook.volumeInfo.title}</h1>
                         <p>{secondBook.volumeInfo.description}</p>
                         <button>Now Read!</button>
                     </div>
                 </div>}

                 {thirdBook && <div className="topshelf">
                     <div className="topimg">
                        <img className="topimg rotate" src= {thirdBook.volumeInfo.imageLinks.thumbnail} alt=""/>
                     </div>
                     <div className="topbody">
                         <h1>{thirdBook.volumeInfo.title}</h1>
                         <p>{thirdBook.volumeInfo.description}</p>
                         <button>Now Read!</button>
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