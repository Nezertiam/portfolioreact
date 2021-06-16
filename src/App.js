import { useState } from "react";
import GlobalStyle from "./components/GlobalStyle"
import Navbar from "./components/Navbar";
import Intro from "./pages/Intro";
import data from "./datas/data"
import Footer from "./components/Footer";
import Tuto from "./pages/Tuto";
import { Route, Switch } from "react-router";

function App() {

  const [datas] = useState(data())
  
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Intro datas={ datas }/>
        </Route>
        <Route path="/tuto">
          <Tuto />
        </Route>
        
      </Switch>
      <Footer />
    </>
  );
}

export default App;
