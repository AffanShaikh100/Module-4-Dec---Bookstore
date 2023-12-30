import React from "react";
import globalcontext from "./globalcontext";
import { useState,useEffect } from "react";
import axios from "axios";

const SearchContext = (props) =>{
let [test,settest] = useState("")
let [harrydata,setHarryData] = useState([]);
let [sherlockdata,setSherlockdata] = useState([])

useEffect(()=>{
    axios.get("https://www.googleapis.com/books/v1/volumes?q=harry+potter")
    .then(
        response => setHarryData(response.data.items)
    )
    .catch(err=>console.log(err))
},[test])

useEffect(()=>{
    axios.get("https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes")
    .then(
        response=>setSherlockdata(response.data.items)
    )
    .catch(err=> console.log(err))
},[test])




    return(
        <div>
            <globalcontext.Provider value={{
                   harrydata:harrydata,
                   setHarryData:setHarryData,
                   sherlockdata:sherlockdata,
                   setSherlockdata:setSherlockdata
            }
            }>
                 {props.children}
            </globalcontext.Provider>
        </div>
    )
}

export default SearchContext;