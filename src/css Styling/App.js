import React from "react";
import Stylesheet from "./Stylesheet";
import Inline from "./Inline";

import './css Styling/appstyle.css';
import name from './css Styling/appstyle.module.css';  //instead of name we can write any thing 

export function App(){
    return(
          <div>
              
              <Stylesheet/>
              
              <Inline/>

              <h3 className="modulee1">This css is normal type css</h3>
              <h3 className={ name.modulee2 }>This css is module type css </h3>  
                                                       {/* but same thing is to be present at before .(dot) */}
             
           App
           </div>
    )
}




