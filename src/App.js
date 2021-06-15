import { useState } from "react";
import GlobalStyle from "./components/GlobalStyle"
import Navbar from "./components/Navbar";
import Intro from "./pages/Intro";
import data from "./datas/data"
import Footer from "./components/Footer";

function App() {

  const [datas] = useState(data())

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Intro datas={ datas }/>
      <Footer />
    </>
  );
}

export default App;
