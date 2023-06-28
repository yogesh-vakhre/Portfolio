import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Contact from "./views/pages/Contact/Contact";
import ErrorPage from "./views/pages/ErrorPage/ErrorPage";
import Home from "./views/pages/Home/Home";
import Skills from "./views/pages/Skills/Skills";
import Experience from "./views/pages/Experience/Experience";
import Projects from "./views/pages/Projects/Projects";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />   
          <Route path="skills" element={<Skills />} />
          <Route path="experience" element={<Experience />} />
          <Route path="projects" element={<Projects />} />       
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
