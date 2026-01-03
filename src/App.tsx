import React, { Suspense, lazy } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MobileOptimized from "./components/MobileOptimized";

// Performance: Lazy load heavy/non-critical components to reduce initial bundle
const ToasterComponent = lazy(() => import("@/components/ui/toaster").then(m => ({ default: m.Toaster })));
const SonnerComponent = lazy(() => import("@/components/ui/sonner").then(m => ({ default: m.Toaster })));

// Lazy load all page components for code splitting
const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const HoneyPage = lazy(() => import("./pages/HoneyPage"));
const GalleryPage = lazy(() => import("./pages/GalleryPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <MobileOptimized />
    <TooltipProvider>
      <BrowserRouter>
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/o-nas" element={<AboutPage />} />
            <Route path="/medy-a-vcely" element={<HoneyPage />} />
            <Route path="/fotogalerie" element={<GalleryPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/kontakt" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Suspense fallback={null}>
          <ToasterComponent />
          <SonnerComponent />
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
