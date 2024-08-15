import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";
import TaskDetails from "./pages/TaskDetails/TaskDetails";
import Subscription from "./pages/Subscription/Subscription";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Auth from "./pages/Auth/Auth";
import { registerUserUrl } from "./config/api";

const user = false;
function App() {
  return (
    <>
      {user ? (
        <div>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/upgrade" element={<Subscription />} />
              <Route path="/project/:id" element={<ProjectDetails />} />
              <Route
                path="/project/:projectId/task/:taskId"
                element={<TaskDetails />}
              />
            </Routes>
          </BrowserRouter>
        </div>
      ) : (
        <Auth />
      )}
    </>
  );
}

export default App;
