import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import GlobalSchema from "@/components/GlobalSchema";
import { AnimatePresence, motion } from "framer-motion";
import { ScrollToTop } from "./components/ScrollToTop";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
const WebGLBackground = React.lazy(() => {
  return new Promise<{ default: React.ComponentType<any> }>((resolve) => {
    const load = () => resolve(import("@/components/ui/WebGLBackground").then(m => ({ default: m.WebGLBackground })));
    
    let loaded = false;
    const trigger = () => {
      if (loaded) return;
      loaded = true;
      ['scroll', 'mousemove', 'touchstart', 'keydown'].forEach(e => window.removeEventListener(e, trigger));
      
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(load, { timeout: 2000 });
      } else {
        setTimeout(load, 50);
      }
    };

    // Load on first interaction to avoid blocking Lighthouse/Initial Load metrics
    ['scroll', 'mousemove', 'touchstart', 'keydown'].forEach(e => window.addEventListener(e, trigger, { once: true, passive: true }));
    
    // Fallback if no interaction occurs
    setTimeout(trigger, 5000);
  });
});

// Lazy loading pages for better performance
const Index = React.lazy(() => import("./pages/Index"));
const Services = React.lazy(() => import("./pages/Services"));
const ServiceDetail = React.lazy(() => import("./pages/ServiceDetail"));
const Engagement = React.lazy(() => import("./pages/Engagement"));
const Careers = React.lazy(() => import("./pages/Careers"));
const PrivacyPolicy = React.lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = React.lazy(() => import("./pages/TermsOfService"));
const CaseStudies = React.lazy(() => import("./pages/CaseStudies"));
const CaseStudyDetail = React.lazy(() => import("./pages/CaseStudyDetail"));
const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));
const IndustryDetail = React.lazy(() => import("./pages/IndustryDetail"));
const Hire = React.lazy(() => import("./pages/Hire"));
const HireDetail = React.lazy(() => import("./pages/HireDetail"));
const Industries = React.lazy(() => import("./pages/Industries"));
const Insights = React.lazy(() => import("./pages/Insights"));
const InsightDetail = React.lazy(() => import("./pages/InsightDetail"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// A simple loading fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Wrapper for animated routes
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Index /></PageWrapper>} />
        <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
        <Route path="/services/:slug" element={<PageWrapper><ServiceDetail /></PageWrapper>} />
        <Route path="/case-studies" element={<PageWrapper><CaseStudies /></PageWrapper>} />
        <Route path="/case-studies/:slug" element={<PageWrapper><CaseStudyDetail /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="/industries/:slug" element={<PageWrapper><IndustryDetail /></PageWrapper>} />
        <Route path="/industries" element={<PageWrapper><Industries /></PageWrapper>} />
        <Route path="/hire" element={<PageWrapper><Hire /></PageWrapper>} />
        <Route path="/hire/:slug" element={<PageWrapper><HireDetail /></PageWrapper>} />
        <Route path="/insights" element={<PageWrapper><Insights /></PageWrapper>} />
        <Route path="/insights/:slug" element={<PageWrapper><InsightDetail /></PageWrapper>} />
        <Route path="/engagement" element={<PageWrapper><Engagement /></PageWrapper>} />
        <Route path="/careers" element={<PageWrapper><Careers /></PageWrapper>} />
        <Route path="/privacy-policy" element={<PageWrapper><PrivacyPolicy /></PageWrapper>} />
        <Route path="/terms-of-service" element={<PageWrapper><TermsOfService /></PageWrapper>} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
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


const App = () => {
  useSmoothScroll();

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="light" storageKey="qorynta-theme" attribute="class">
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <GlobalSchema />
              <Navbar />
              <ScrollToTop />
              <Suspense fallback={<PageLoader />}>
                <WebGLBackground />
                <AnimatedRoutes />
              </Suspense>
              <Footer />
            </BrowserRouter>
          </TooltipProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
