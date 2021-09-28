import { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router";
import AboutSection from "./components/home/AboutSection";
import ContactSection from "./components/home/ContactSection";
import HomeSection from "./components/home/HomeSection";
import WorkSection from "./components/home/WorkSection";
import Navbar from "./components/navbar/Navbar";
import Pathfinder from "./components/pathfinder/Pathfinder";

function App() {

  const [path, setPath] = useState(window.location.pathname);

  let num = Pathfinder.findNumByPath(path);
  console.log(num)
  console.log(path)

  useEffect(() => {
    const handleWheel = (event) => {
      window.removeEventListener("wheel", handleWheel);
      if (event.deltaY > 0) {
        if (num < Pathfinder.routes.length - 1) {
          num++;
          setPath(Pathfinder.findPathByNum(num));
        } else {
          window.addEventListener("wheel", handleWheel);
        }
      }
      if (event.deltaY < 0) {
        if (num !== 0) {
          num--;
          setPath(Pathfinder.findPathByNum(num));
        } else {
          window.addEventListener("wheel", handleWheel);
        }
      }
    }
    window.addEventListener("wheel", handleWheel);
  })


  return (
    <>
      <Navbar />

      {
        path !== window.location.pathname &&
        <Redirect to={path} />
      }

      <Switch>
        <Route exact path="/">
          <HomeSection />
        </Route>
        <Route exact path="/works">
          <WorkSection />
        </Route>
        <Route exact path="/about">
          <AboutSection />
        </Route>
        <Route exact path="/contact">
          <ContactSection />
        </Route>
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
