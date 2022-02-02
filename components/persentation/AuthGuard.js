import React from "react";
import { useSetRecoilState } from "recoil";
import { fireAuth } from "../../services/firebase";
import {userState} from "./../../states/userState"



const AuthGuard = ({children}) => {
    const setUser = useSetRecoilState(userState)
    React.useEffect(async()=>{
        const fetchUser = await fireAuth.onAuthStateChanged((user)=>{
            setUser({
                uid: user?.uid,
                username:user?.displayName,
                email:user?.email,
                profile:user?.photoURL,
            });
            console.log({
               
                    uid: user?.uid,
                    username:user?.displayName,
                    email:user?.email,
                    profile:user?.photoURL

            })

        })

    })
    return ( 
        <div>

            {children}

        </div>
     );
}
 
export default AuthGuard;