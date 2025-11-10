import Image from "next/image";
import ScrollToTopButton from "@/components/ScrollToTopButton";

interface HistoriaPageProps {
  params: Promise<{ locale: "pt" | "en" }>;
}

export default async function HistoriaPage({ params }: HistoriaPageProps) {
  const { locale } = await params;

  const textos = {
    pt: {
      bannerAlt: "Frente Geremia",
      bannerTitulo: "Nossa História",
      logoAlt: "Logo Geremia Bar",
      titulo: "A TRADIÇÃO DO HAPPY HOUR",
      paragrafos: [
        "O nome Geremia foi criado a partir de um personagem que simboliza, acima de tudo, a amizade. O Gerê é aquela pessoa ideal para te acompanhar em um happy hour ou na comemoração de alguma data importante.",
        "Ambiente confortável e aconchegante, cardápio com pratos exclusivos e aquela bebida gelada. Desde que abriu as portas, em 2015, o Geremia Bar se tornou uma referência de bar em Uberaba, seguindo o padrão de bares tradicionais das capitais.",
        "Toda a nossa estrutura foi pensada para proporcionar aos nossos clientes experiências inesquecíveis. Estamos localizados em uma das principais ruas da cidade, em frente ao grandioso Teatro SESI Uberaba e ao lado do Hotel Tamareiras. Uma rua bonita, arborizada e de fácil acesso.",
        "A nossa equipe de colaboradores é fora da curva. A união e a qualidade do nosso time é, sem dúvida, o nosso maior diferencial. Do garçom ao chef de cozinha, todos prezam pelo bom atendimento e a cordialidade. Mais do que funcionários, eles fazem parte da história do Geremia. Somos uma família.",
        "Aqui tem comida mineira, petiscos, chopps e cervejas de trincar os dentes. Venha curtir e aproveitar os melhores momentos de sua vida em nosso bar. Venha para o Gerê! Sinta-se em casa!",
      ],
    },
    en: {
      bannerAlt: "Geremia Bar Front View",
      bannerTitulo: "Our Story",
      logoAlt: "Geremia Bar Logo",
      titulo: "THE TRADITION OF HAPPY HOUR",
      paragrafos: [
        "The name 'Geremia' was inspired by a character who represents, above all, friendship. 'Gerê' is that perfect person to join you for a happy hour or to celebrate a special moment.",
        "A cozy and comfortable atmosphere, an exclusive menu, and that perfect cold drink. Since it opened its doors in 2015, Geremia Bar has become a true reference in Uberaba, following the style of traditional capital city bars.",
        "Our entire structure was designed to offer unforgettable experiences. We are located on one of the city’s main streets, right in front of the grand SESI Theater and beside the Tamareiras Hotel — a beautiful, tree-lined, and easily accessible area.",
        "Our team is extraordinary. The unity and quality of our staff are undoubtedly our greatest strengths. From the waiter to the chef, everyone values excellent service and kindness. More than employees, they are part of Geremia’s story — we’re a family.",
        "Here, you’ll find authentic Minas Gerais cuisine, delicious appetizers, and ice-cold beer. Come enjoy the best moments of your life with us. Come to Gerê — feel at home!",
      ],
    },
  };

  const t = textos[locale];

  return (
    <div className="flex flex-col items-center">
      {/* Banner */}
      <div className="relative w-full h-[250px] md:h-[350px]">
        <Image
          src="/frente.webp"
          alt={t.bannerAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-3 text-sm md:text-base font-semibold drop-shadow-lg z-10">
          {t.bannerTitulo}
        </div>
      </div>

      {/* Logo central */}
      <div className="mt-16 py-5 px-6 text-center relative bg-white">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20">
          <Image
            src="/happy-hour.webp"
            alt={t.logoAlt}
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Conteúdo principal */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-center font-bold text-4xl">{t.titulo}</h1>
        {t.paragrafos.map((p, i) => (
          <p
            key={i}
            className="text-lg leading-relaxed text-gray-700 text-center py-5"
          >
            {p}
          </p>
        ))}
      </section>

      {/* Galeria */}
      <section className="w-full bg-gray-50 -mt-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 px-6">
          {[
            "/frente.webp",
            "/historia/geremia-interna.webp",
            "/historia/geremia-entrada.webp",
            "/historia/geremia-entrada2.webp",
            "/historia/fraldinha.webp",
            "/historia/drinks.webp",
            "/historia/chopps.webp",
            "/historia/geremia-entrada3.webp",
            "/historia/geremia-frente.webp",
            "/historia/geremia-entrada4.webp",
            "/historia/chopp1.webp",
            "/historia/geremia-interna2.webp",
          ].map((src, i) => (
            <div
              key={i}
              className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-lg hover:scale-[1.03] transition-transform duration-500"
            >
              <Image
                src={src}
                alt={`Foto ${i + 1} do Geremia Bar`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <ScrollToTopButton />
    </div>
  );
}
