import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";
import TaskDetails from "./pages/TaskDetails/TaskDetails";
import Subscription from "./pages/Subscription/Subscription";
import Auth from "./pages/Auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserProfile } from "./redux/auth/action";
import { getProjects } from "./redux/project/action";
import UpgradeSuccess from "./pages/Subscription/UgradeSuccess";
import UpgradeFail from "./pages/Subscription/UpgradeFail";
import AcceptInvite from "./pages/ProjectDetails/AcceptInvite";

function App() {
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getUserProfile());
    dispatch(getProjects({}));
  }, [auth.jwt]);

  return (
    <>
      {auth.user ? (
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/upgrade" element={<Subscription />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route
              path="/upgrade/success/:planType"
              element={<UpgradeSuccess />}
            />
            <Route path="/upgrade/fail" element={<UpgradeFail />} />
            <Route path="/invite/accept" element={<AcceptInvite />} />
            <Route
              path="/project/:projectId/task/:taskId"
              element={<TaskDetails />}
            />
          </Routes>
        </div>
      ) : (
        <Auth />
      )}
    </>
  );
}

export default App;
