import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Research from "./pages/Research";
import ProfRBS from "./pages/ProfRBS";
import CoWorkers from "./pages/CoWorkers";
import Alumni from "./pages/Alumni";
import Publications from "./pages/Publications";
import Academic from "./pages/Academic";
import Courses from "./pages/Courses";
import Lectures from "./pages/Lectures";
import Seminars from "./pages/Seminars";
import News from "./pages/News";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
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
          <Route path="/research" element={<Research />} />
          <Route path="/prof-rbs" element={<ProfRBS />} />
          <Route path="/co-workers" element={<CoWorkers />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/academic" element={<Academic />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/lectures" element={<Lectures />} />
          <Route path="/seminars" element={<Seminars />} />
          <Route path="/news" element={<News />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/positions" element={<Navigate to="/contact" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
