import { useNavigate } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';

export function EmergencyButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/get-help')}
      className="fixed bottom-8 right-8 bg-[#d4183d] hover:bg-[#b01431] text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-2 transition-all duration-300 hover:scale-105 z-40 animate-pulse"
      aria-label="Get emergency help"
    >
      <AlertCircle className="h-6 w-6" />
      <span className="font-semibold">Get Help Now</span>
    </button>
  );
}
