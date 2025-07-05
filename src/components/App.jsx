import { BrowserRouter, Route ,Routes} from "react-router-dom"
import Login from "./Login"

import Profile from "./Profile"
import Body from "./Body"
import { Provider } from "react-redux"
import appStore from "../utils/appStore"
import Feed from "./Feed"
import Connections from "./Connections"
import Request from "./Request"
import Home from "./Home"
import Chat from "./Chat"

function App() {

  return (
    <>
    <Provider store={appStore}>
    <BrowserRouter basename="/">
    <Routes>
      
      <Route path="/" element= {<Body/>} >
      <Route path="/login" element={<Login />} />
      {/* <Route path="/signup" element={<Login />} /> */}
      <Route path="/feed" element= {<Feed/>} />
      <Route path="/profile" element= {<Profile/>} />
      <Route path="/connections" element= {<Connections/>} />
      <Route path="/requests" element= {<Request/>} />
      <Route path="/home" element= {<Home/>} />
      <Route path="/chat/:targetUserId" element={<Chat/>}/>
      
    </Route>
    </Routes>
    </BrowserRouter>
    </Provider>
    </>
  )
}

export default App

