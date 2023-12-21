import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from "./components/Home";
import Movie from "./components/Movie";
import Library from "./components/Library";

// Define the main App component
function App() {
  return (
    // Set up the React Router using BrowserRouter
    <Router>
      <div className="App">
        {/* Navbar */}
        <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/movie">Movies</Nav.Link>
              <Nav.Link href="/library">Library</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        {/* Routes for different components */}
        <Routes>
          {/* Home route */}
          <Route path='/' element={<Home />} exact />

          {/* Movies route */}
          <Route exact path='/movie' element={<Movie />} />

          {/* Library route */}
          <Route path='/library' element={<Library />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
