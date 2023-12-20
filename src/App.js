import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
//import Header from "./Header"; 
//import Routers from "./Routers"; 
//import Footer from "./Footer";
import Home from "./roots/Home";
import Movie from "./roots/Movie";
import Show from "./roots/Show";
import Library from "./roots/Library";
import Navbar from './components/Navbar';
//import myImage from './images/What.png';

// Define the main App component
function App() {
  return (
    // Set up the React Router using BrowserRouter
    <Router>
       <Navbar />
    
      <Routes>
         {/* Route for all pages */}
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movie />} />
        <Route path="/shows" element={<Show />} />
        <Route path="/library" element={<Library />} />
      </Routes>

    </Router>
  );
}

export default App;
