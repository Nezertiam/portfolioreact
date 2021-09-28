import { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import AboutSection from "./components/home/AboutSection";
import ContactSection from "./components/home/ContactSection";
import HomeSection from "./components/home/HomeSection";
import WorkSection from "./components/home/WorkSection";
import Navbar from "./components/navbar/Navbar";

function App() {

  const [path, setPath] = useState(window.location.pathname);
  const routes = ["home", "works", "about", "contact"];

  const findPathByNum = (num) => {
    switch (num) {
      case 1:
        return "/works";
      case 2:
        return "/about";
      case 3:
        return "/contact";
      default:
        return "/home";
    }
  }

  const findNumByPath = (path) => {
    switch (path) {
      case "/works":
        return 1;
      case "/about":
        return 2;
      case "/contact":
        return 3;
      default:
        return 0;
    }
  }

  let num = findNumByPath(path);
  console.log(num)
  console.log(path)

  useEffect(() => {
    const handleWheel = (event) => {
      window.removeEventListener("wheel", handleWheel);
      if (event.deltaY > 0) {
        if (num < routes.length - 1) {
          num++;
          setPath(findPathByNum(num));
        } else {
          window.addEventListener("wheel", handleWheel);
        }
      }
      if (event.deltaY < 0) {
        if (num !== 0) {
          num--;
          setPath(findPathByNum(num));
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
