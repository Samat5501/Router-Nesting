import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
    useRouteMatch,
  useParams,
} from "react-router-dom";
import Data from "../Data/Data";
import About from "./About";
import Contact from "./Home";
import { Topic } from "./Service";


function Topics() {
//   const [value, setValue] = useState()  
  // let { path, url } = useRouteMatch();

  return (
    <Router>
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/service'>Service</Link>
        </li>
        <li>
          <Link to='/data'>Data</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path='/'>
          <h3>Please select a topic.</h3>
        </Route>
         {/* <Route path={`${path}/:topicId`}>
          <Topic />
        </Route> */}
        <Route exact path='/about'>
          <About />
        </Route>
        <Route path="/data">
            <Data />
          </Route>
      </Switch>
      </div>
    </Router>
  );
}
export default Topics