import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/components/Layout';
import { lazy, Suspense } from 'react';

// Lazy load pages for better performance
const HomePage = lazy(() => import('@/pages/Home/index'));
const AboutPage = lazy(() => import('@/pages/About/index'));
const CapabilitiesPage = lazy(() => import('@/pages/Capabilities/index'));
const ContactPage = lazy(() => import('@/pages/Contact/index'));
const CustomCastingPage = lazy(() => import('@/pages/CustomCasting/index'));
const AluminumCastingMichiganPage = lazy(() => import('@/pages/AluminumCastingMichigan/index'));
const NotFoundPage = lazy(() => import('@/pages/NotFound/index'));

// Loading component
const Loading = () => (
  <div className="flex items-center justify-center min-h-screen bg-industrial-50">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-accent"></div>
  </div>
);

// Wrapper for lazy loaded components
const Lazy = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<Loading />}>{children}</Suspense>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Lazy><HomePage /></Lazy>,
      },
      {
        path: '/about',
        element: <Lazy><AboutPage /></Lazy>,
      },
      {
        path: '/capabilities',
        element: <Lazy><CapabilitiesPage /></Lazy>,
      },
      {
        path: '/contact',
        element: <Lazy><ContactPage /></Lazy>,
      },
      {
        path: '/custom-aluminum-castings',
        element: <Lazy><CustomCastingPage /></Lazy>,
      },
      {
        path: '/aluminum-casting-michigan',
        element: <Lazy><AluminumCastingMichiganPage /></Lazy>,
      },
    ],
  },
  {
    path: '*',
    element: <Lazy><NotFoundPage /></Lazy>,
  },
]);
