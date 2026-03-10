import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-industrial-50 text-industrial-800">
      <div className="text-center">
        <AlertTriangle className="mx-auto h-24 w-24 text-accent mb-6" />
        <h1 className="text-6xl font-heading mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          to="/" 
          className="bg-industrial-900 text-white font-bold py-3 px-8 rounded-sm hover:bg-accent transition-colors font-heading tracking-wide"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
