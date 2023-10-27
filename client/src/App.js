import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import "./App.css";
import Landing from "./views/landing/landing";
import Home from "./views/home/home";



function App() {

  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" element={ <Landing/> }/> 
          <Route path="/home" element= { <Home/> }/>
          <Route path='/detail/:id'/>
          <Route path='/from'/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
