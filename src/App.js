import { useState } from "react"
import GlobalStyle from "./components/GlobalStyle"
import Navbar from "./components/Navbar"
import Intro from "./pages/Intro"
import data from "./datas/data"
import Footer from "./components/Footer"
import Tuto from "./pages/Tuto"
import { Route, Switch, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

function App() {

  const [datas] = useState(data())
  const location = useLocation()
  
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Switch location={ location } key={ location.pathname }>
          <Route exact path="/">
            <Intro datas={ datas }/>
          </Route>
          <Route path="/tuto">
            <Tuto />
          </Route>
        </Switch>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
