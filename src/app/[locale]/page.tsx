"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Carousel from "@/components/Carousel";
import Link from "next/link";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { useParams } from "next/navigation";

export default function Home() {
  const { locale } = useParams() as { locale?: string };
  const safeLocale = (locale ?? "pt") as "pt" | "en";
  const text = safeLocale === "pt" ? t.pt : t.en;

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Carousel />

        {/* Seção principal */}
        <section className="py-16 px-6 text-center relative bg-white">
          <div className="absolute mt-5 top-10 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24">
            <Image
              src="/happy-hour.webp"
              alt={text.logoAlt}
              fill
              className="object-contain"
            />
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-4">{text.happyHourTitle}</h2>
            <p className="text-base max-w-xl mx-auto mb-6">
              {text.happyHourText}
            </p>
            <Link href={`/${safeLocale}/historia`}>
              <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition">
                {text.seeHistory}
              </button>
            </Link>
          </div>
        </section>

        {/* Cardápio */}
        <section className="relative w-full h-[50vh]">
          <Link href={`/${safeLocale}/cardapio`} className="absolute inset-0">
            <Image
              src="/porcoes/maia.webp"
              alt={text.menuAlt}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center z-10 px-4">
              <h2
                className="text-2xl font-bold absolute -bottom-10 left-1/2 -translate-x-1/2 text-white drop-shadow-md px-4 py-2"
                style={{ backgroundColor: "#2E4024" }}
              >
                {text.menu}
              </h2>
            </div>
          </Link>
        </section>

        {/* Galeria */}
        <section className="relative w-full h-[50vh] flex flex-col md:flex-row">
          <div className="relative w-full md:w-1/2 h-full overflow-hidden">
            <Image
              src="/historia/geremia-interna2.webp"
              alt={text.galleryAlt}
              fill
              className="object-cover"
              priority
            />
            <div
              className="absolute inset-0 backdrop-blur-sm flex items-center justify-center"
              style={{ backgroundColor: "rgba(249, 132, 9, 0.4)" }}
            >
              <h2 className="text-white text-2xl font-bold drop-shadow-md">
                {text.gallery}
              </h2>
            </div>
          </div>

          <div
            className="flex items-center justify-center px-8 py-6 md:w-1/2 text-center"
            style={{ backgroundColor: "#F98409", color: "#000" }}
          >
            <div>
              <p className="text-lg font-semibold mb-4">{text.galleryIntro}</p>
              <p className="text-base mb-6">{text.galleryText}</p>
              <Link href={`/${safeLocale}/galeria`}>
                <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
                  {text.seeGallery}
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <ScrollToTopButton />
    </div>
  );
}

const t = {
  pt: {
    logoAlt: "Logo Geremia Bar",
    happyHourTitle: "A TRADIÇÃO DO HAPPY HOUR",
    happyHourText:
      "Aqui tem comida mineira, petiscos, chopps e cervejas de trincar os dentes. Venha curtir e aproveitar os melhores momentos de sua vida em nosso bar. Venha para o Gerê! Sinta-se em casa!",
    seeHistory: "Ver História",
    menuAlt: "Logo Geremia Bar",
    menu: "Cardápio",
    galleryAlt: "Galeria de Fotos",
    gallery: "GALERIA DE FOTOS",
    galleryIntro: "Fique por dentro do que rola no Gerê.",
    galleryText: "Acesse nossa galeria de fotos e veja os melhores momentos!",
    seeGallery: "Ver Galeria",
  },
  en: {
    logoAlt: "Geremia Bar Logo",
    happyHourTitle: "THE TRADITION OF HAPPY HOUR",
    happyHourText:
      "Here you'll find authentic Brazilian food, snacks, draft beers, and icy cold drinks. Come enjoy the best moments of your life at our bar. Come to Gerê! Feel at home!",
    seeHistory: "See History",
    menuAlt: "Geremia Bar Logo",
    menu: "Menu",
    galleryAlt: "Photo Gallery",
    gallery: "PHOTO GALLERY",
    galleryIntro: "Stay tuned to what’s happening at Gerê.",
    galleryText: "Visit our photo gallery and relive the best moments!",
    seeGallery: "See Gallery",
  },
};
