import Home from "./Mycomponents/Home";
import Navbar from "./Mycomponents/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogsDetails from "./BlogsDetails";
import Notfound from "./Notfound";
import Create from "./Create";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogsDetails />
            </Route>
            <Route path={"*"}>
              <Notfound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
