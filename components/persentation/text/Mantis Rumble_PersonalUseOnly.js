import React from 'react';

export default function Mantis({children}){
    return(
        <div>
            <p style={{fontFamily:"mantisFont"}}>
                {children}
            </p>
            <style jsx="true">{`
               @font-face{
                   fontFamily:"mantisFont";
                   src:url("fonts/Mantis Rumble_PersonalUseOnly.ttf")
               }
            `}
            </style>

        </div>

    )
}
