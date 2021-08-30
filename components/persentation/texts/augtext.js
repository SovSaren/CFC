import { fontFamily } from "@material-ui/system";
import React from "react";
const AUGText = ({children}) =>{
 return(
<div>
    <p style ={{fontFamily:'Cake'}}>
    {children}
    </p>
    <style jsx="true">{`
        @font-face{
            font- fontFamily:'Cake';
            src: url('/font/AUGUSTUS.TTF');
       }
`}</style>
</div>
 );
};
export default AUGText;