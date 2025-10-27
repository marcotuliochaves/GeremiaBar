"use client";

import Link from "next/link";
import Image from "next/image";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        href="https://wa.me/553433121515"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <Image
          src="/whatsapp-button.webp"
          alt="Fale conosco no WhatsApp"
          width={64}
          height={64}
          className="hover:scale-105 transition-transform duration-300"
        />
      </Link>
    </div>
  );
}
