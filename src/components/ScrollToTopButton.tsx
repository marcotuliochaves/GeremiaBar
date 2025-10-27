"use client";
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react"; // ícone (pode trocar ou remover)

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Monitora o scroll da página
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Função para rolar até o topo
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-28 right-6 bg-[#f98409] text-white p-3 rounded-full shadow-lg hover:bg-[#e67300] transition z-[9999]"
      aria-label="Voltar ao topo"
      style={{ pointerEvents: "auto" }}
    >
      <ChevronUp size={24} />
    </button>
  );
}
