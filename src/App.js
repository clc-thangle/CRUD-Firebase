import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SearchItem from './components/SearchItem'
import TutorialsList from "./components/tutorials-list.component";
import AddTutorial from "./components/add-tutorial.component";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        }
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <a href="/tutorials" className="navbar-brand">
                        bezKoder
          </a>
                    <div className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to={"/tutorials"} className="nav-link">
                                Tutorials
              </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/add"} className="nav-link">
                                Add
              </Link>
                        </li>
                    </div>
                </nav>

                <div className="container mt-3">
                    <h2>React Firebase Database CRUD</h2>
                    <Switch>
                        <Route exact path={["/", "/tutorials"]} component={TutorialsList} onSearch={this.onSearch} />
                        <Route exact path="/add" component={AddTutorial} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;