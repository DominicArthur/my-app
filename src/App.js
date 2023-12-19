import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
//import Header from "./Header"; 
//import Routers from "./Routers"; 
//import Footer from "./Footer";
import Home from "./roots/Home";
import Movie from "./roots/Movie";
//import Shows from "./roots/Shows";

// Define the main App component
function App() {
  return (
    // Set up the React Router using BrowserRouter
    <Router>
      
    
      <Routes>
         {/* Route for all pages */}
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movie />}/>
        <Route path="/shows" element={<Shows />}/> 
      </Routes>

    </Router>
  );
}

export default App;
