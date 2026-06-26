// import logo from './logo.svg';
import Homepage from './Homepage/Homepage';
import Projects from './Projects/Projects';
import ProjectDetail from './Projects/ProjectDetail/ProjectDetail';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/" element = {<Homepage/>}/>
          <Route path = "/projects" element = {<Projects/>}/>
          <Route path = "/about" element = {<Projects/>}/>
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
