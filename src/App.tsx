import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Research from "./pages/Research";
import People from "./pages/People";
import Publications from "./pages/Publications";
import Academic from "./pages/Academic";
import Courses from "./pages/Courses";
import Lectures from "./pages/Lectures";
import Seminars from "./pages/Seminars";
import News from "./pages/News";
import OpenPositions from "./pages/OpenPositions";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import ProfessorProfile from "./pages/ProfessorProfile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/research" element={<Research />} />
          <Route path="/people" element={<People />} />
          <Route path="/professor" element={<ProfessorProfile />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/academic" element={<Academic />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/lectures" element={<Lectures />} />
          <Route path="/seminars" element={<Seminars />} />
          <Route path="/news" element={<News />} />
          <Route path="/positions" element={<OpenPositions />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
