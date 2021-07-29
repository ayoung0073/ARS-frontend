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

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/problems/:problemId" component={Detail} />
          <Route exact path="/tags" component={TagMain} />
          <Route exact path="/search" component={Search} />

          <Route exact path="/write" component={ProblemRegister} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
