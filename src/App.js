import "./MyApp.css"
import Budget from "./components/Budget";
import Authentication from "./Authentication";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {Provider} from "react-redux";
import store from "./redux/store";


function App() {

    return (
        <Provider store={store}>
            <div className="app-container">
                <Router>
                    <Route exact path="/">
                        <Authentication/>
                    </Route>


                    <Switch>
                        <Route path="/dashboard/:identity">
                            <Budget/>
                        </Route>
                    </Switch>
                </Router>
            </div>
        </Provider>

    );
}


export default App;
