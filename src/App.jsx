import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <div className="main-container">
          <Navbar className="navbar" />
          <div className="main-content">
            {/* <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/post" element={<Post />} />

              <Route path="/signup" element={<Signup />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes> */}
          </div>
          {/* <Footer /> */}
        </div>
      </Router>
    </>
  );
}

export default App;
