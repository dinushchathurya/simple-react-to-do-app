import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Todos from './components/Todo/Todos';
import Todo from './components/Todo/Todo';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route exact path="/" children={<Todos />} />
            <Route path="/todo/:id" children={<Todo />} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

