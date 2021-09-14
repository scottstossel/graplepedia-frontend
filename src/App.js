import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import PositionList from "./components/PositionList";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={PositionList}/>
        <Route exact path="/edit/:id"></Route>
        <Route exact path="/create"></Route>
      </Switch>
    </BrowserRouter>

  ) 
}

export default App;
