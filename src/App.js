import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Blog from "./components/Blog";
import ContactUs from "./components/ContactUs";
import About from "./components/About";

function App() {
  return (
    <Router>
      <div className="page-wrapper">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
