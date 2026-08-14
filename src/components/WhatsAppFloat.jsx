import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  return (
    <div className="wa-float-container">
      <a
        href="https://api.whatsapp.com/send?phone=919328602931&text=Hello%20Priya%20Impex,%20I%20am%20interested%20in%20your%20export%20commodities."
        target="_blank"
        rel="noopener noreferrer"
        className="wa-float-btn"
        aria-label="Chat with Priya Impex on WhatsApp"
        title="Chat on WhatsApp (+91 9328602931)"
      >
        <MessageCircle size={28} color="#FFFFFF" fill="#FFFFFF" />
        <span className="wa-float-pulse"></span>
      </a>
    </div>
  );
}
