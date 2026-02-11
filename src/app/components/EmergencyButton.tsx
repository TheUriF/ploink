import { useNavigate } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';

export function EmergencyButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/get-help')}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 bg-[#d4183d] hover:bg-[#b01431] text-white px-4 py-3 sm:px-6 sm:py-4 rounded-full shadow-2xl flex items-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95 z-40 animate-pulse touch-manipulation"
      aria-label="Get emergency help"
    >
      <AlertCircle className="h-5 w-5 sm:h-6 sm:w-6" />
      <span className="font-semibold text-sm sm:text-base">Get Help Now</span>
    </button>
  );
}
