import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { Suspense, useTransition, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ScrollToTop } from "./components/ScrollToTop";
import { ThemeProvider } from "@/components/ThemeProvider";
const WebGLBackground = React.lazy(() => {
  return new Promise<{ default: React.ComponentType<any> }>((resolve) => {
    // Delay fetching the 500KB Three.js bundle until after the page is fully loaded and painted
    setTimeout(() => {
      resolve(import("@/components/ui/WebGLBackground").then(m => ({ default: m.WebGLBackground })));
    }, 2500);
  });
});

// Lazy loading pages for better performance (Code Splitting)
const Index = React.lazy(() => import("./pages/Index"));
const Services = React.lazy(() => import("./pages/Services"));
const ServiceDetail = React.lazy(() => import("./pages/ServiceDetail"));
const CaseStudies = React.lazy(() => import("./pages/CaseStudies"));
const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute stale-while-revalidate config
      refetchOnWindowFocus: false,
    }
  }
});

// A lightweight loading fallback (crucial for LCP)
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Wrapper for animated routes utilizing Concurrent Mode
const AnimatedRoutes = () => {
  const location = useLocation();
  const [isPending, startTransition] = useTransition();
  const [currentLocation, setCurrentLocation] = useState(location);

  useEffect(() => {
    // Yield to the main thread before rendering the new route
    // This breaks up long tasks and drastically reduces TBT
    startTransition(() => {
      setCurrentLocation(location);
    });
  }, [location]);

  return (
    <div style={{ opacity: isPending ? 0.7 : 1, transition: 'opacity 0.2s' }}>
      <AnimatePresence mode="wait">
        <Routes location={currentLocation} key={currentLocation.pathname}>
          <Route path="/" element={<PageWrapper><Index /></PageWrapper>} />
          <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
          <Route path="/services/:slug" element={<PageWrapper><ServiceDetail /></PageWrapper>} />
          <Route path="/case-studies" element={<PageWrapper><CaseStudies /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
          <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

// Page transition wrapper
const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="qorynta-theme" attribute="class">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={null}>
            <WebGLBackground />
          </Suspense>
          <ScrollToTop />
          <Suspense fallback={<PageLoader />}>
            <AnimatedRoutes />
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
