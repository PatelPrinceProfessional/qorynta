import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const WhatsAppButton = () => {
  // Use a default WhatsApp number if none provided in prompt
  const whatsappNumber = "+919316157949";

  return (
    <div className="fixed bottom-6 right-6 z-[99] animate-slide-in-bottom">
      <Button
        asChild
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-[0_4px_15px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_25px_rgba(37,211,102,0.6)] hover:-translate-y-1 transition-all duration-300 p-0"
      >
        <a 
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle className="w-8 h-8 fill-current" />
        </a>
      </Button>
    </div>
  );
};
