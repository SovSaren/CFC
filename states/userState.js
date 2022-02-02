import { atom } from "recoil";

const userState = atom ({
    key:'USERSTARE',
    default: {},
})
export {
    userState
}