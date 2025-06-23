
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import SecurityMonitor from "./components/SecurityMonitor";

// Lazy loading pour améliorer les performances
const Index = lazy(() => import("./pages/Index"));
const InfoAudition = lazy(() => import("./pages/InfoAudition"));
const Calendar = lazy(() => import("./pages/Calendar"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
    },
  },
});

const LoadingSpinner = () => (
  <div className="min-h-screen bg-choir-navy flex items-center justify-center">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-choir-gold"></div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <SecurityMonitor />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auditions" element={<InfoAudition />} />
            <Route path="/calendrier" element={<Calendar />} />
            <Route path="/politique-confidentialite" element={<PrivacyPolicy />} />
            <Route path="/conditions-utilisation" element={<TermsOfService />} />
            
            {/* Redirections pour les nouvelles URLs vers les anciennes ancres */}
            <Route path="/#about" element={<Navigate to="/#a_propos_du_choeur" replace />} />
            <Route path="/#press" element={<Navigate to="/#presse_et_medias" replace />} />
            <Route path="/#contact" element={<Navigate to="/#nous_contacter" replace />} />
            <Route path="/calendar" element={<Navigate to="/calendrier" replace />} />
            
            {/* Redirections pour les anciennes URLs */}
            <Route path="/blog" element={<Navigate to="/#presse_et_medias" replace />} />
            <Route path="/blog/*" element={<Navigate to="/#presse_et_medias" replace />} />
            <Route path="/chroristes" element={<Navigate to="/#ensemble" replace />} />
            <Route path="/choristes" element={<Navigate to="/#ensemble" replace />} />
            <Route path="/partenaires" element={<Navigate to="/" replace />} />
            <Route path="/copie-de-partenaires" element={<Navigate to="/" replace />} />
            <Route path="/tout-en-photo-video" element={<Navigate to="/#ensemble" replace />} />
            
            {/* Redirections pour les posts spécifiques avec différentes variations d'encodage */}
            <Route path="/post/les-voix-du-ch%C5%93ur-m%C3%A9tamorphose-r%C3%A9ussie" element={<Navigate to="/#presse_et_medias" replace />} />
            <Route path="/post/les-voix-du-chœur-métamorphose-réussie" element={<Navigate to="/#presse_et_medias" replace />} />
            <Route path="/post/les-voix-du-ch%C5%93ur-se-pr%C3%A9parent-1" element={<Navigate to="/#presse_et_medias" replace />} />
            <Route path="/post/les-voix-du-chœur-se-préparent-1" element={<Navigate to="/#presse_et_medias" replace />} />
            <Route path="/post/les-voix-du-ch%C5%93ur-tout-simplement-no%C3%ABl" element={<Navigate to="/#presse_et_medias" replace />} />
            <Route path="/post/les-voix-du-chœur-tout-simplement-noël" element={<Navigate to="/#presse_et_medias" replace />} />
            
            {/* Redirections génériques pour tous les posts */}
            <Route path="/post/*" element={<Navigate to="/#presse_et_medias" replace />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
