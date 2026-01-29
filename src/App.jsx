import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CoursesPage from "./pages/CoursesPage";
import LoginPrompt from "./components/auth/LoginPrompt";
import TestSeries from "./pages/TestSeries";
import Store from "./pages/Store";
import About from "./pages/About";
import Auth from "./pages/Auth";
import ScrollToTop from "./components/ScrollToTop";
export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/tests" element={<TestSeries />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
      <Footer />
      <LoginPrompt />
    </>
  );
}
