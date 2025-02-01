import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, WorkExperience, Project, Contact } from "./pages";
import { Header, Footer } from "./components";

const App = () => {
  return (
    <Router>
      <div className="font-sans bg-gray-50">
        <Header />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work-experience" element={<WorkExperience />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
