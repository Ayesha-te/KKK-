import { jsx as _jsxDEV } from 'react/jsx-runtime';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import GalleryPage from './pages/GalleryPage';

const queryClient = new QueryClient();

const App = () => (
  _jsxDEV(QueryClientProvider, {
    client: queryClient,
    children: _jsxDEV(TooltipProvider, {
      children: [
        _jsxDEV(Toaster, {}),
        _jsxDEV(Sonner, {}),
        _jsxDEV(BrowserRouter, {
          children: _jsxDEV(Routes, {
            children: [
              _jsxDEV(Route, { path: "/", element: _jsxDEV(Index, {}) }),
              _jsxDEV(Route, { path: "/gallery", element: _jsxDEV(GalleryPage, {}) }),
              _jsxDEV(Route, { path: "*", element: _jsxDEV(NotFound, {}) })
            ]
          })
        })
      ]
    })
  })
);

export default App;
