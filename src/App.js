import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Main from "./pages/Main"
import Detail from "./pages/Detail"

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/problems/:problemId" component={Detail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
