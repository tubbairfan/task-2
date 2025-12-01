import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutProvider } from "./Index";
import "./index.css"
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import ServicesDetail from "./pages/ServicesDetail";
import ProjectDetail from "./pages/ProjectDetail";
import Project from "./pages/Project";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Element from "./pages/Element";
import Pages from "./pages/Pages"
import ScrollToTop from "./ScrollToTop"; 
function App() {
  return (
    <AboutProvider>
      <BrowserRouter>
       <ScrollToTop /> 
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Service Details" element={<ServicesDetail />} />
          <Route path="/project Details" element={<ProjectDetail />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="blog Details" element={<BlogDetails/>} />
          <Route path="/Element" element={<Element />} />
           <Route path="/Element" element={<Pages />} />
        </Routes>
 <Footer />
      </BrowserRouter>
    </AboutProvider>
  );
}
export default App;
