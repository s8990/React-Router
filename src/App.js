import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Blog from "./components/Blog";
import BlogDetails from "./components/BlogDetails";
import Shop from "./components/Shop";
import ContactUs from "./components/ContactUs";
import About from "./components/About";

function App() {
  return (
    <Router>
      <div className="page-wrapper">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/blog/:id" component={BlogDetails} />
          <Route path="/shop" component={Shop} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
