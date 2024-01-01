import React from "react";
import Navbar from "./Components/Navbar";
import Book from "./Components/Book";
import Inputsearch from "./Components/Inputsearch";

const app =()=>{

    return(
        <div>
             <Navbar/>
             <Book/>
             <Inputsearch/>
        </div>
             
    )
}

export default app