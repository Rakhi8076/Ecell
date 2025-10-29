import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// 🛑 Preloader component import
import Preloader from "./components/Preloader";

// Import your page components
import Index from "./pages/Index";
import EventsPage from "./pages/EventsPage";
import SpeakersPage from "./pages/SpeakersPage";
import SponsorsPage from "./pages/SponsorsPage";
import FAQPage from "./pages/FAQPage";
import GalleryPage from "./pages/GalleryPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// 🧩 PreloaderWrapper — sirf homepage ke liye preloader dikhata hai
const PreloaderWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const location = useLocation();

  React.useEffect(() => {
    // ✅ Sirf "/" path pe hi preloader chale
    if (location.pathname === "/") {
      const timer = setTimeout(() => setIsLoading(false), 2500);
      return () => clearTimeout(timer);
    } else {
      // Baaki routes ke liye preloader skip karo
      setIsLoading(false);
    }
  }, [location.pathname]);

  if (isLoading && location.pathname === "/") {
    return <Preloader />;
  }

  return <>{children}</>;
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename= "/Ecell/">
          <PreloaderWrapper>
            <Routes>
              {/* HOME ROUTE */}
              <Route path="/" element={<Index />} />

              {/* OTHER ROUTES */}
              <Route path="/events" element={<EventsPage />} />
              <Route path="/speakers" element={<SpeakersPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/sponsors" element={<SponsorsPage />} />
              <Route path="/faq" element={<FAQPage />} />

              {/* CATCH-ALL ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PreloaderWrapper>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
