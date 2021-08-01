import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Main from "./pages/Main"
import Detail from "./pages/Detail"
import TagMain from "./pages/TagMain"
import ProblemRegister from "./pages/ProblemRegister"
import Search from "./pages/Search"
import Login from "./pages/Login"
import ReviewRegister from "./pages/ReviewRegister"
import ReviewUpdate from "./pages/ReviewUpdate";
import GuestBook from "./pages/GuestBook";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/problems/:problemId" component={Detail} />
          <Route exact path="/tags" component={TagMain} />
          <Route exact path="/search" component={Search} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/write" component={ProblemRegister} />
          <Route exact path="/problems/:problemId/reviews/write" component={ReviewRegister} />
          <Route exact path="/reviews/update" component={ReviewUpdate} />
          
          <Route exact path="/guest" component={GuestBook} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
