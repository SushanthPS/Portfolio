import { Switch, Route } from "react-router-dom";
import Home from "../Components/Home";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Projects from "../Components/Projects";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/contact-me">
                <Contact />
            </Route>
            <Route path="/projects">
                <Projects />
            </Route>
        </Switch>
    );
}
