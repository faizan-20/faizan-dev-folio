import { Link, Outlet } from 'react-router-dom';
import Home from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  return (
    <div className="min-h-screen bg-rosepine-base">
      <Home />
    </div>
  );
}

export default App;