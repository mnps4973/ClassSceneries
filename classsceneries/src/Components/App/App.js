import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";

import './App.css';

import Classroom from "../../Pages/Classroom/Classroom";
import Welcome from "../../Pages/Welcome/Welcome";

function App() {

  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" exact element={<Welcome/>} />
        <Route path="/classroom" exact element={<Classroom/>} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
