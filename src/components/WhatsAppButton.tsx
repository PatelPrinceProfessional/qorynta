import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const WhatsAppButton = () => {
  // Use a default WhatsApp number if none provided in prompt
  const whatsappNumber = "+910000000000"; // Placeholder

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 md:hidden z-50 animate-slide-in-bottom pointer-events-none">
      <Button
        asChild
        size="lg"
        className="w-full rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-lg pointer-events-auto h-14"
      >
        <a 
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 text-base font-semibold"
        >
          <MessageCircle className="w-6 h-6 fill-current" />
          WhatsApp Us
        </a>
      </Button>
    </div>
  );
};
