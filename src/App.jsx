// App.jsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Link,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <nav className="flex gap-5 p-5 bg-gray-100">
        <Link to="/" className="text-blue-600 hover:underline">
          Home
        </Link>
        <Link to="/about" className="text-green-600 hover:underline">
          About
        </Link>
        <Link to="/services" className="text-yellow-600 hover:underline">
          Services
        </Link>
      </nav>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
