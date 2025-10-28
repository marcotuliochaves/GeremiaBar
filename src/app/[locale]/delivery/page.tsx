import Link from "next/link";
import Image from "next/image";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function DeliveryPage({ params }: any) {
  const locale = params?.locale === "en" ? "en" : "pt";

  const textos = {
    pt: {
      titulo: "Delivery",
      altBanner: "Delivery",
      descricao:
        "Está com fome? Faça seu pedido agora mesmo pelo nosso iFood e receba no conforto da sua casa!",
      botaoAlt: "iFood",
      link: "https://www.ifood.com.br/delivery/uberaba-mg/geremia-bar-centro/2268aea6-4c36-4b76-86c4-ce4b816627d0",
    },
    en: {
      titulo: "Delivery",
      altBanner: "Delivery",
      descricao:
        "Feeling hungry? Order now through iFood and enjoy our dishes in the comfort of your home!",
      botaoAlt: "iFood",
      link: "https://www.ifood.com.br/delivery/uberaba-mg/geremia-bar-centro/2268aea6-4c36-4b76-86c4-ce4b816627d0",
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

      {/* Imagem do banner */}
      <div className="relative w-[200px] h-[40px] mb-8">
        <Image
          src="/delivery.webp"
          alt={t.altBanner}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 300px"
        />
      </div>

      {/* Texto principal */}
      <p className="text-lg text-white mb-8 max-w-md">{t.descricao}</p>

      {/* Botão iFood */}
      <Link href={t.link} target="_blank" rel="noopener noreferrer">
        <div className="relative w-[200px] h-[150px] hover:scale-105 transition-transform duration-300">
          <Image
            src="/ifood.webp"
            alt={t.botaoAlt}
            fill
            className="object-contain"
          />
        </div>
      </Link>

      <ScrollToTopButton />
    </main>
  );
}
