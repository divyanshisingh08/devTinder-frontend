import { BrowserRouter, Route ,Routes} from "react-router-dom"
import Login from "./Login"
import Profile from "./Profile"
import Body from "./Body"
import { Provider } from "react-redux"
import appStore from "../utils/appStore"
import Feed from "./Feed"
import Connections from "./Connections"

function App() {

  return (
    <>
    <Provider store={appStore}>
    <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element= {<Body/>} >
      <Route path="/feed" element= {<Feed/>} />
      <Route path="/login" element= {<Login/>} />
      <Route path="/profile" element= {<Profile/>} />
      <Route path="/connections" element= {<Connections/>} />
      <Route path="/Request" element= {<Connections/>} />
    </Route>
    </Routes>
    </BrowserRouter>
    </Provider>
    </>
  )
}

export default App

