import React from "react";
import Logoimg from "../image/Logo.svg"
import searchimg from "../image/searchicon.svg"
import bookimg from "../image/bx_bx-book-heart.svg"
import bellimg from "../image/ic_round-notifications-none.svg"
import profileimg from "../image/fluent_premium-person-20-regular.svg"
import userimg from "../image/usericon.svg"
import userbtmimg from "../image/Arrow 1.svg"

const Navbar=()=>{
    return (
       <div className="navbar">
         <div className="nav1">
            <img src={Logoimg} alt="Logo"/>
            <p>
               <span>KeazoN</span>BOOKS
            </p>
         </div>
         <div className="nav2">
            <div>
             <img src={searchimg} alt="Please wait"/>
             <input type="text" placeholder="Search for the book you want and read it now... Sherlock Holmes, Harry Pot..."/>
            </div>
             <button>Search</button>
         </div>
         <div className="nav3">
              <img src={bookimg} alt="Please wait"/>
              <img src={bellimg} alt="Please wait"/>
              <img src={profileimg} alt="Please wait"/>
              <div>
                <img src={userimg} alt="Please wait"/>
                <img src={userbtmimg} alt="Please wait"/>
              </div>
             
         </div>
       </div>
    )
}

export default Navbar