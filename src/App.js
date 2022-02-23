import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Landing  from "./Components/Landing/Landing";
import ReadMore from "./Components/ReadMore/ReadMore";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
    <Header/>
    <Router>
    <Switch>
    <Route path="/introduction/readmore" component={ReadMore} />

    <Route path="/" component={Landing} />
  </Switch>   
  </Router>  
    </div>
  );
}

export default App;
