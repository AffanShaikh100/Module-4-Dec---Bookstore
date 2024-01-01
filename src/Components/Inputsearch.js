import React, { useEffect } from "react";
import globalcontext from "../context/globalcontext";
import { useState } from "react";
import { useContext } from "react";
import axios from "axios";

const Inputsearch = () =>{

let [fdata,setFdata] = useState([]);
let {filter,bookinp} = useContext(globalcontext);


    useEffect(()=>{
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookinp}`)
        .then(
            response => setFdata(response.data.items)
        )
        .catch(
          err => console.log(err)
        )
    },[filter])
       


    return(
        <div className="mainbookdiv">

            <div className="displaybook">

                <div className="booksdiv">
                   {
                     fdata.map((item)=>(
                       <div className="book">
                            <img className="bookimg" src={item.volumeInfo.imageLinks.thumbnail} alt={item.volumeInfo.title}/>
                      </div>
                     ))
                   }
                </div>

            </div>

        </div>
    )
}

export default Inputsearch