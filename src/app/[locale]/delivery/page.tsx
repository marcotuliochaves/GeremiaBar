interface DeliveryPageProps {
  params: Promise<{ locale: "pt" | "en" }>;
}

export default async function DeliveryPage({ params }: DeliveryPageProps) {
  const { locale } = await params;

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
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-12 -mb-20 text-center bg-[#2E4024]">
      <h1 className="text-4xl font-bold text-white mb-6">{t.titulo}</h1>
      {/* ...restante do código */}
    </main>
  );
}
