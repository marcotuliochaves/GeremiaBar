"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type HeaderProps = {
  locale: "pt" | "en";
};

export default function Header({ locale }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const t = {
    pt: {
      inicio: "Início",
      historia: "História",
      cardapio: "Cardápio",
      galeria: "Galeria de Fotos",
      delivery: "Delivery",
      contato: "Contato",
    },
    en: {
      inicio: "Home",
      historia: "Our Story",
      cardapio: "Menu",
      galeria: "Gallery",
      delivery: "Delivery",
      contato: "Contact",
    },
  };
  const idiomaLabel = {
    pt: "Escolha seu idioma",
    en: "Choose your language",
  };

  const text = t[locale] || t.pt;

  const links = [
    { href: `/${locale}`, label: text.inicio },
    { href: `/${locale}/historia`, label: text.historia },
    { href: `/${locale}/cardapio`, label: text.cardapio },
    { href: `/${locale}/galeria`, label: text.galeria },
    { href: `/${locale}/delivery`, label: text.delivery },
    { href: `/${locale}/contato`, label: text.contato },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-[#1E2719] text-white px-6 py-4 shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="Logo Geremia Bar"
            width={400}
            height={400}
            priority
          />
        </Link>

        {/* Menu desktop */}
        <nav className="hidden md:flex items-center justify-between w-full text-lg font-medium ml-80">
          <div className="flex gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-yellow-400 transition"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Seletor de idioma desktop */}
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-white opacity-80">
              {idiomaLabel[locale]}
            </span>
            <div className="flex gap-3">
              <Link
                href="/pt"
                className={`border-2 ${
                  locale === "pt" ? "border-yellow-400" : "border-transparent"
                }`}
              >
                <Image
                  src="/bandeiras/brasil.webp"
                  alt="Português"
                  width={32}
                  height={32}
                />
              </Link>

              <Link
                href="/en"
                className={`border-2 ${
                  locale === "en" ? "border-yellow-400" : "border-transparent"
                }`}
              >
                <Image
                  src="/bandeiras/eua.svg"
                  alt="English"
                  width={38}
                  height={32}
                />
              </Link>
            </div>
          </div>
        </nav>

        {/* Botão hambúrguer mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 z-50"
          aria-label="Abrir menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay escurecido clicável */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-30 md:hidden"
              onClick={() => setMenuOpen(false)} // Fecha ao clicar fora
            />

            {/* Drawer (menu lateral) */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="fixed top-20 -right-1 h-3/5 w-2/4 bg-[#1E2719] flex flex-col items-center py-10 gap-6 text-lg font-medium md:hidden z-40 shadow-lg"
            >
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-yellow-400 transition"
                >
                  {link.label}
                </Link>
              ))}

              {/* Seletor de idioma mobile */}
              <div className="flex flex-col items-center gap-2 mt-8">
                <span className="text-sm text-white opacity-80">
                  {idiomaLabel[locale]}
                </span>
                <div className="flex gap-4">
                  <Link
                    href="/pt"
                    onClick={() => setMenuOpen(false)}
                    className={`border-2 ${
                      locale === "pt"
                        ? "border-yellow-400"
                        : "border-transparent"
                    }`}
                  >
                    <Image
                      src="/bandeiras/brasil.webp"
                      alt="Português"
                      width={40}
                      height={40}
                    />
                  </Link>

                  <Link
                    href="/en"
                    onClick={() => setMenuOpen(false)}
                    className={`border-2 ${
                      locale === "en"
                        ? "border-yellow-400"
                        : "border-transparent"
                    }`}
                  >
                    <Image
                      src="/bandeiras/eua.svg"
                      alt="English"
                      width={48}
                      height={40}
                    />
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
