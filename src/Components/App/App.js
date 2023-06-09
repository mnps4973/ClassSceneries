import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";

import './App.css';

import Classroom from "../../Pages/Classroom/Classroom";
import Welcome from "../../Pages/Welcome/Welcome";
import Activity1 from "../../Pages/Activity1/Activity1";
import Activity4 from "../../Pages/Activity4/Activity4";


function App() {

  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" exact element={<Welcome/>} />
        <Route path="/classroom" exact element={<Classroom/>} />
        <Route path="/classroom/activity1" exact element={<Activity1/>} />
        <Route path="/classroom/activity4" exact element={<Activity4/>} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
