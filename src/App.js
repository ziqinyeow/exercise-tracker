import styled from "styled-components";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ExercisesList from "./components/ExercisesList";
import EditExercise from "./components/EditExercise";
import CreateExercise from "./components/CreateExercise";
import CreateUser from "./components/CreateUser";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <ExercisesList />
        </Route>
        <Route path="/edit/:id">
          <EditExercise />
        </Route>
        <Route path="/create">
          <CreateExercise />
        </Route>
        <Route path="/user">
          <CreateUser />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

const Container = styled.div``;
