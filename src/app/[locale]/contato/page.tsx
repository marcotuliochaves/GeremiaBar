import Link from "next/link";
import Image from "next/image";

export default function ContatoPage({ params }: any) {
  const locale = params?.locale === "en" ? "en" : "pt";

  const textos = {
    pt: {
      titulo: "Contato",
      bannerAlt: "Contato",
      descricao:
        "Fale com a gente pelo WhatsApp! Tire dúvidas, faça reservas ou envie sugestões.",
      botaoAlt: "WhatsApp",
      link: "https://wa.me/553433121515",
    },
    en: {
      titulo: "Contact",
      bannerAlt: "Contact",
      descricao:
        "Get in touch with us on WhatsApp! Ask questions, make reservations, or send suggestions.",
      botaoAlt: "WhatsApp",
      link: "https://wa.me/553433121515",
    },
  };

  const t = textos[locale];

  return (
    <main
      className="flex flex-col items-center justify-center min-h-screen px-4 py-12 -mb-20 text-center"
      style={{ backgroundColor: "#2E4024" }}
    >
      {/* Título */}
      <h1 className="text-4xl font-bold text-white mb-6">{t.titulo}</h1>

      {/* Banner */}
      <div className="relative w-[200px] h-[40px] mb-8">
        <Image
          src="/delivery.webp"
          alt={t.bannerAlt}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 300px"
        />
      </div>

      {/* Descrição */}
      <p className="text-lg text-white mb-8 max-w-md">{t.descricao}</p>

      {/* Botão WhatsApp */}
      <Link href={t.link} target="_blank" rel="noopener noreferrer">
        <div className="relative w-[100px] h-[80px] transition-transform duration-300 hover:scale-110 cursor-pointer">
          <Image
            src="/whatsapp-button.webp"
            alt={t.botaoAlt}
            fill
            className="object-contain"
          />
        </div>
      </Link>
    </main>
  );
}
