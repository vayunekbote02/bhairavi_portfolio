import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  WorkExperience,
  Project,
  Contact,
  Achievements,
  Education,
  References,
  CV,
} from "./pages";
import { Header, Footer } from "./components";

const App = () => {
  return (
    <Router>
      <div id="root" className="font-sans bg-gray-50">
        <Header />
        <main className="pt-20">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/work-experience" element={<WorkExperience />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/education" element={<Education />} />
            <Route path="/references" element={<References />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cv" element={<CV />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
