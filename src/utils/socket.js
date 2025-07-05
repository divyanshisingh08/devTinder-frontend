import io from "socket.io-client"
import { BASE_URL } from "./constants"



export const createSocketConnection=()=>{
    //BE URL
    return io(BASE_URL,)
}