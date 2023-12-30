import React from "react";
import ReactDOM  from "react-dom";
import SearchContext from "./context/Searchcontext";
import "./style.css"

import App from "./App"

ReactDOM.render(
<SearchContext>
     <App/>
</SearchContext>, document.getElementById("root"));
