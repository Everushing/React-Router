import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import './App.css'
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
  

  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/" element={ <HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetails/>} />
        </Routes>
    </>
  )
}

export default App
