import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import CourseScreen from "./components/CoursesScreen/CourseScreen";
import ContactUs from "./components/ContactUs/ContactUs";
import Faculties from "./components/Faculties/Faculties";
import Activities from "./components/Activities/Activities";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/courses" element={<CourseScreen />} />
          <Route exact path="/contact" element={<ContactUs />} />
          <Route exact path="/faculties" element={<Faculties />} />
          <Route exact path="/activities" element={<Activities />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
