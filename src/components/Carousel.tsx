"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useParams } from "next/navigation";

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
  });

  const { locale } = useParams() as { locale?: string };
  const safeLocale = (locale ?? "pt") as "pt" | "en";
  const slides = safeLocale === "pt" ? t.pt : t.en;

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative w-screen overflow-hidden">
      {/* Wrapper do carrossel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div
          className="flex will-change-transform"
          style={{ transform: "translate3d(0,0,0)" }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] w-screen relative h-[60vh] sm:h-[70vh]"
            >
              <Image
                src={slide.src}
                alt={slide.title}
                fill
                className="object-cover transition-transform duration-500 ease-out will-change-transform"
                loading="eager"
                priority={index < 2} // pré-carrega as duas primeiras imagens
              />

              {/* Texto sobre a imagem */}
              <div className="absolute bottom-10 left-10 text-white z-10 drop-shadow-lg">
                <h2 className="text-3xl font-bold">{slide.title}</h2>
                <p className="text-lg">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Botões de navegação */}
      <button
        onClick={scrollPrev}
        aria-label="Imagem anterior"
        className="absolute top-1/2 left-5 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full z-20 transition-all duration-200 active:scale-90"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={scrollNext}
        aria-label="Próxima imagem"
        className="absolute top-1/2 right-5 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full z-20 transition-all duration-200 active:scale-90"
      >
        <ChevronRight size={28} />
      </button>
    </div>
  );
}

const t = {
  pt: [
    {
      src: "/chopp-home.webp",
      title: "HAPPY HOUR É AQUI!",
      description: "Sabores únicos, ambiente acolhedor e tradição desde 2015.",
    },
    {
      src: "/coxinha-crocante.webp",
      title: "Coxinha de costela",
      description: "Uma explosão de sabor que vai conquistar seu paladar.",
    },
    {
      src: "/pratos/feijoada.webp",
      title: "Feijoada especial",
      description: "A receita tradicional com aquele toque da casa.",
    },
  ],
  en: [
    {
      src: "/chopp-home.webp",
      title: "HAPPY HOUR IS HERE!",
      description: "Unique flavors, cozy atmosphere, and tradition since 2015.",
    },
    {
      src: "/coxinha-crocante.webp",
      title: 'Beef "Coxinha"',
      description: "A burst of flavor that will win you over.",
    },
    {
      src: "/pratos/feijoada.webp",
      title: "Special Feijoada",
      description: "The traditional recipe with our special touch.",
    },
  ],
};
