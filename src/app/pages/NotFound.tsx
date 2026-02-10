import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[600px] px-4">
      <div className="text-center max-w-2xl">
        <div className="text-9xl font-bold text-[#6FAF2F] mb-4">404</div>
        <h1 className="text-4xl mb-4">Page Not Found</h1>
        <p className="text-xl text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border hover:bg-muted transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            Go Back
          </button>
          <button
            onClick={() => navigate('/')}
            className="flex items-center justify-center gap-2 bg-[#6FAF2F] hover:bg-[#5e9527] text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
          >
            <Home className="h-5 w-5" />
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
}
