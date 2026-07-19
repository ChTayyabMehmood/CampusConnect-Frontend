import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import Onboarding from "./pages/Onboarding";
import Dashboard from "./pages/Dashboard";
import AppNavbar from "./components/AppNavbar";

function App() {
  return (
    <div className="w-7xl mx-auto ">
      <AppNavbar />
      <Dashboard />
    </div>
  );
}

export default App;
