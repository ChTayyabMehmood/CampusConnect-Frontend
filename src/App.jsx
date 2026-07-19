import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import Onboarding from "./pages/Onboarding";
import Dashboard from "./pages/Dashboard";
import AppNavbar from "./components/AppNavbar";
import OpportunityDetails from "./pages/OpportunityDetail";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// 1. Define the layout here (or import it from another file)
function DashboardLayout() {
  return (
    <>
      <AppNavbar />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  { path: "/auth", element: <Auth /> },
  { path: "/onboarding", element: <Onboarding /> },
  {
    path: "/feed",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "opportunity", element: <OpportunityDetails /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
