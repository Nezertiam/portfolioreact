import { useState } from "react";
import GlobalStyle from "./components/GlobalStyle"
import Navbar from "./components/Navbar";
import Intro from "./pages/Intro";
import data from "./datas/data"

function App() {

  const [datas] = useState(data())

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Intro datas={ datas }/>
    </>
  );
}

export default App;
