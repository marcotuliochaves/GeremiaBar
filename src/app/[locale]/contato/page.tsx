import Link from "next/link";
import Image from "next/image";

interface ContatoPageProps {
  params: Promise<{ locale: "pt" | "en" }>;
}

export default async function ContatoPage({ params }: ContatoPageProps) {
  const { locale } = await params;

  const textos = {
    pt: {
      titulo: "Contato",
      bannerAlt: "Contato",
      descricao:
        "Fale com a gente pelo WhatsApp! Tire dúvidas, faça reservas ou envie sugestões.",
      botaoAlt: "WhatsApp",
      link: "https://wa.me/553433121515",
      paragrafo: "Clique aqui!",
    },
    en: {
      titulo: "Contact",
      bannerAlt: "Contact",
      descricao:
        "Get in touch with us on WhatsApp! Ask questions, make reservations, or send suggestions.",
      botaoAlt: "WhatsApp",
      link: "https://wa.me/553433121515",
      paragrafo: "Click here!",
    },
  };

  const t = textos[locale];

  return (
    /* backup verde <main className="flex flex-col items-center justify-center min-h-screen px-4 py-12 -mb-20 text-center bg-[#2E4024]">*/
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-12 -mb-20 text-center">
      <h1 className="text-4xl font-bold mb-6">{t.titulo}</h1>

      <div className="relative w-[200px] h-[40px] mb-8">
        <Image
          src="/delivery.webp"
          alt={t.bannerAlt}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 300px"
        />
      </div>

      <p className="text-lg text-gray-700 mb-8 max-w-md">{t.descricao}</p>

      <Link href={t.link} target="_blank" rel="noopener noreferrer ">
        <div className="relative w-[100px] h-[80px] transition-transform duration-300 hover:scale-110 cursor-pointer">
          <Image
            src="/whatsapp-button.webp"
            alt={t.botaoAlt}
            fill
            className="object-contain"
          />
        </div>
        <p className="text-lg text-gray-700 mb-8 max-w-md hover:scale-110 cursor-pointer mt-2">
          {t.paragrafo}
        </p>
      </Link>
    </main>
  );
}
