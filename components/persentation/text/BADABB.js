import React from 'react';
export default function fontBADABB({children}){
    return(
        <div>
            <p style={{fontFamily:"BADABBFont"}}>
                {children}
            </p>
            <style jsx="true">{`
               @font-face{
                   fontFamily:"BADABBFont";
                   src:url("fonts/BADABB.TTF")
               }
            `}
            </style>

        </div>

    )
}