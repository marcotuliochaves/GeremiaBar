import CardapioCard from "@/components/CardapioCard";
import {
  pratosPorcoes,
  pratosPrincipais,
  paraAcompanhar,
  saladinha,
  vegetarianos,
  sanduiche,
  caldinhos,
  sobremesas,
} from "@/data/pratos";
import {
  chopps,
  cervejas600,
  longNecks,
  drinks,
  caips,
  sucos,
  zeroAlcool,
  cachacaDose,
  vinhos,
  destiladosDose,
  destiladosGarrafa,
  whiskyDose,
  whiskyGarrafa,
  growler,
} from "@/data/bebidas";
import { souvenir } from "@/data/souvenir";
import CardapioTabs from "@/components/CardapioTabs";
import CardapioCategoria from "@/components/CardapioCategoria";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import type { Prato } from "@/data/pratos";

type CardapioPageProps = {
  params: {
    locale: "pt" | "en";
  };
};

export default function CardapioPage({ params }: CardapioPageProps) {
  const { locale } = params;

  const textos: Record<
    "pt" | "en",
    Record<string, { titulo: string; subtitulo: string }>
  > = {
    pt: {
      Porções: { titulo: "Porções", subtitulo: "Não sai de moda!" },
      Pratos: { titulo: "Pratos", subtitulo: "Digno de Reis e Rainhas!" },
      "Para Acompanhar": {
        titulo: "Para Acompanhar",
        subtitulo: "",
      },
      Saladinha: { titulo: "Saladinha", subtitulo: "Vou bem de leve!" },
      Vegetarianos: { titulo: "Vegetarianos", subtitulo: "Não como carne!" },
      Sandubão: { titulo: "Sandubão", subtitulo: "" },
      Caldinhos: { titulo: "Caldinhos", subtitulo: "" },
      Sobremesas: { titulo: "Sobremesas", subtitulo: "Para adoçar!" },
      Chopps: { titulo: "Chopps", subtitulo: "" },
      "Cervejas 600ML": { titulo: "Cervejas 600ML", subtitulo: "" },
      "Long Necks": { titulo: "Long Necks", subtitulo: "" },
      Drinks: { titulo: "Drinks", subtitulo: "Para refrescar!" },
      Caips: { titulo: "Caips", subtitulo: "" },
      Sucos: { titulo: "Sucos", subtitulo: "Aquele suquinho!" },
      "Bebidas sem álcool": {
        titulo: "Bebidas sem álcool",
        subtitulo: "",
      },
      "Cachaças (Dose)": { titulo: "Cachacinha", subtitulo: "(Doses)" },
      Vinhos: { titulo: "Vinhos", subtitulo: "" },
      "Destilados (Dose)": {
        titulo: "Destilados (Dose)",
        subtitulo: "(Doses)",
      },
      "Destilados (Garrafas)": {
        titulo: "Destilados",
        subtitulo: "(Garrafas)",
      },
      "Whiskys (Dose)": { titulo: "Whiskys", subtitulo: "(Doses)" },
      "Whiskys (Garrafas)": { titulo: "Whiskys", subtitulo: "(Garrafas)" },
      Growler: { titulo: "Growler", subtitulo: "" },
      Souvenir: { titulo: "Souvenir", subtitulo: "" },
    },
    en: {
      Porções: { titulo: "Snacks", subtitulo: "Never goes out of style!" },
      Pratos: { titulo: "Dishes", subtitulo: "Fit for Kings and Queens!" },
      "Para Acompanhar": {
        titulo: "Sides",
        subtitulo: "",
      },
      Saladinha: { titulo: "Salads", subtitulo: "Going light today!" },
      Vegetarianos: {
        titulo: "Vegetarian",
        subtitulo: "No meat!",
      },
      Sandubão: { titulo: "Sandwiches", subtitulo: "" },
      Caldinhos: { titulo: "Soups", subtitulo: "" },
      Sobremesas: { titulo: "Desserts", subtitulo: "Sweeten your day!" },
      Chopps: { titulo: "Draft Beer", subtitulo: "" },
      "Cervejas 600ML": { titulo: "600ML Beers", subtitulo: "" },
      "Long Necks": { titulo: "Long Necks", subtitulo: "" },
      Drinks: { titulo: "Cocktails", subtitulo: "Cool and refreshing!" },
      Caips: { titulo: "Caipirinhas", subtitulo: "" },
      Sucos: { titulo: "Juices", subtitulo: "Fresh and fruity!" },
      "Bebidas sem álcool": { titulo: "Non-alcoholic", subtitulo: "" },
      "Cachaças (Dose)": { titulo: "Cachaça", subtitulo: "(Shots)" },
      Vinhos: { titulo: "Wines", subtitulo: "" },
      "Destilados (Dose)": { titulo: "Spirits", subtitulo: "(Shots)" },
      "Destilados (Garrafas)": { titulo: "Spirits", subtitulo: "(Bottles)" },
      "Whiskys (Dose)": { titulo: "Whiskies", subtitulo: "(Shots)" },
      "Whiskys (Garrafas)": { titulo: "Whiskies", subtitulo: "(Bottles)" },
      Growler: { titulo: "Growler", subtitulo: "" },
      Souvenir: { titulo: "Souvenir", subtitulo: "" },
    },
  };

  return (
    <>
      <CardapioTabs locale={locale}>
        <CardapioCategoria categoria="Porções">
          <main className="bg-white text-black px-6 py-10 min-h-screen">
            <div className="max-w-7xl mx-auto space-y-12">
              <h1 className="text-4xl font-bold text-[#f98409] text-center mb-8">
                {textos[locale]["Porções"].titulo}
                <p className="text-lg font-normal text-zinc-600">
                  {textos[locale]["Porções"].subtitulo}
                </p>
              </h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center items-stretch">
                {pratosPorcoes.map((prato: Prato, index) => (
                  <CardapioCard
                    key={index}
                    titulo={prato.titulo[locale]}
                    descricao={prato.descricao[locale]}
                    preco={
                      Array.isArray(prato.preco)
                        ? prato.preco.map((p) =>
                            typeof p === "string" ? p : p[locale]
                          )
                        : typeof prato.preco === "string"
                        ? prato.preco
                        : prato.preco[locale]
                    }
                    imagem={prato.imagem}
                  />
                ))}
              </div>
            </div>
          </main>
        </CardapioCategoria>
        <CardapioCategoria categoria="Pratos">
          <main className="bg-white text-black px-6 py-10 min-h-screen">
            <div className="max-w-7xl mx-auto space-y-12">
              <h1 className="text-4xl font-bold text-[#f98409] text-center mb-8">
                {textos[locale]["Pratos"].titulo}
                <p className="text-lg font-normal text-zinc-600">
                  {textos[locale]["Pratos"].subtitulo}
                </p>
              </h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center items-stretch">
                {pratosPrincipais.map((prato, index) => (
                  <CardapioCard
                    key={index}
                    titulo={prato.titulo[locale]}
                    descricao={prato.descricao[locale]}
                    preco={
                      Array.isArray(prato.preco)
                        ? prato.preco.map((p) =>
                            typeof p === "string" ? p : p[locale]
                          )
                        : typeof prato.preco === "string"
                        ? prato.preco
                        : prato.preco[locale]
                    }
                    imagem={prato.imagem}
                  />
                ))}
              </div>
            </div>
          </main>
        </CardapioCategoria>

        <CardapioCategoria categoria="Para Acompanhar">
          <main className="bg-white text-black px-6 py-10 min-h-screen">
            <div className="max-w-7xl mx-auto space-y-12">
              <h1 className="text-4xl font-bold text-[#f98409] text-center mb-8">
                {textos[locale]["Para Acompanhar"].titulo}
              </h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center items-stretch">
                {paraAcompanhar.map((prato, index) => (
                  <CardapioCard
                    key={index}
                    titulo={prato.titulo[locale]}
                    descricao={prato.descricao[locale]}
                    preco={
                      Array.isArray(prato.preco)
                        ? prato.preco.map((p) =>
                            typeof p === "string" ? p : p[locale]
                          )
                        : typeof prato.preco === "string"
                        ? prato.preco
                        : prato.preco[locale]
                    }
                    imagem={prato.imagem}
                  />
                ))}
              </div>
            </div>
          </main>
        </CardapioCategoria>

        <CardapioCategoria categoria="Saladinha">
          <main className="bg-white text-black px-6 py-10 min-h-screen">
            <div className="max-w-7xl mx-auto space-y-12">
              <h1 className="text-4xl font-bold text-[#f98409] text-center mb-8">
                {textos[locale]["Saladinha"].titulo}
                <p className="text-lg font-normal text-zinc-600">
                  {textos[locale]["Saladinha"].subtitulo}
                </p>
              </h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center items-stretch">
                {saladinha.map((prato, index) => (
                  <CardapioCard
                    key={index}
                    titulo={prato.titulo[locale]}
                    descricao={prato.descricao[locale]}
                    preco={
                      Array.isArray(prato.preco)
                        ? prato.preco.map((p) =>
                            typeof p === "string" ? p : p[locale]
                          )
                        : typeof prato.preco === "string"
                        ? prato.preco
                        : prato.preco[locale]
                    }
                    imagem={prato.imagem}
                  />
                ))}
              </div>
            </div>
          </main>
        </CardapioCategoria>

        <CardapioCategoria categoria="Vegetarianos">
          <main className="bg-white text-black px-6 py-10 min-h-screen">
            <div className="max-w-7xl mx-auto space-y-12">
              <h1 className="text-4xl font-bold text-[#f98409] text-center mb-8">
                {textos[locale]["Vegetarianos"].titulo}
                <p className="text-lg font-normal text-zinc-600">
                  {textos[locale]["Vegetarianos"].subtitulo}
                </p>
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center items-stretch">
                {vegetarianos.map((prato, index) => (
                  <CardapioCard
                    key={index}
                    titulo={prato.titulo[locale]}
                    descricao={prato.descricao[locale]}
                    preco={
                      Array.isArray(prato.preco)
                        ? prato.preco.map((p) =>
                            typeof p === "string" ? p : p[locale]
                          )
                        : typeof prato.preco === "string"
                        ? prato.preco
                        : prato.preco[locale]
                    }
                    imagem={prato.imagem}
                  />
                ))}
              </div>
            </div>
          </main>
        </CardapioCategoria>

        <CardapioCategoria categoria="Sandubão">
          <main className="bg-white text-black px-6 py-10 min-h-screen">
            <div className="max-w-7xl mx-auto space-y-12">
              <h1 className="text-4xl font-bold text-[#f98409] text-center mb-8">
                {textos[locale]["Sandubão"].titulo}
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center items-stretch">
                {sanduiche.map((prato, index) => (
                  <CardapioCard
                    key={index}
                    titulo={prato.titulo[locale]}
                    descricao={prato.descricao[locale]}
                    preco={
                      Array.isArray(prato.preco)
                        ? prato.preco.map((p) =>
                            typeof p === "string" ? p : p[locale]
                          )
                        : typeof prato.preco === "string"
                        ? prato.preco
                        : prato.preco[locale]
                    }
                    imagem={prato.imagem}
                  />
                ))}
              </div>
            </div>
          </main>
        </CardapioCategoria>

        <CardapioCategoria categoria="Caldinhos">
          <main className="bg-white text-black px-6 py-10 min-h-screen">
            <div className="max-w-7xl mx-auto space-y-12">
              <h1 className="text-4xl font-bold text-[#f98409] text-center mb-8">
                {textos[locale]["Caldinhos"].titulo}
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center items-stretch">
                {caldinhos.map((prato, index) => (
                  <CardapioCard
                    key={index}
                    titulo={prato.titulo[locale]}
                    descricao={prato.descricao[locale]}
                    preco={
                      Array.isArray(prato.preco)
                        ? prato.preco.map((p) =>
                            typeof p === "string" ? p : p[locale]
                          )
                        : typeof prato.preco === "string"
                        ? prato.preco
                        : prato.preco[locale]
                    }
                    imagem={prato.imagem}
                  />
                ))}
              </div>
            </div>
          </main>
        </CardapioCategoria>

        <CardapioCategoria categoria="Sobremesas">
          <main className="bg-white text-black px-6 py-10 min-h-screen">
            <div className="max-w-7xl mx-auto space-y-12">
              <h1 className="text-4xl font-bold text-[#f98409] text-center mb-8">
                {textos[locale]["Sobremesas"].titulo}
                <p className="text-lg font-normal text-zinc-600">
                  {textos[locale]["Sobremesas"].subtitulo}
                </p>
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center items-stretch">
                {sobremesas.map((prato, index) => (
                  <CardapioCard
                    key={index}
                    titulo={prato.titulo[locale]}
                    descricao={prato.descricao[locale]}
                    preco={
                      Array.isArray(prato.preco)
                        ? prato.preco.map((p) =>
                            typeof p === "string" ? p : p[locale]
                          )
                        : typeof prato.preco === "string"
                        ? prato.preco
                        : prato.preco[locale]
                    }
                    imagem={prato.imagem}
                  />
                ))}
              </div>
            </div>
          </main>
        </CardapioCategoria>

        <CardapioCategoria categoria="Chopps">
          <main className="bg-white text-black px-6 py-10 min-h-screen">
            <div className="max-w-7xl mx-auto space-y-12">
              <h1 className="text-4xl font-bold text-[#f98409] text-center mb-8">
                {textos[locale]["Chopps"].titulo}
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center items-stretch">
                {chopps.map((prato, index) => (
                  <CardapioCard
                    key={index}
                    titulo={prato.titulo[locale]}
                    descricao={prato.descricao[locale]}
                    preco={
                      Array.isArray(prato.preco)
                        ? prato.preco.map((p) =>
                            typeof p === "string" ? p : p[locale]
                          )
                        : typeof prato.preco === "string"
                        ? prato.preco
                        : prato.preco[locale]
                    }
                    imagem={prato.imagem}
                  />
                ))}
              </div>
            </div>
          </main>
        </CardapioCategoria>

        <CardapioCategoria categoria="Cervejas 600ML">
          <main className="bg-white text-black px-6 py-10 min-h-screen">
            <div className="max-w-7xl mx-auto space-y-12">
              <h1 className="text-4xl font-bold text-[#f98409] text-center mb-8">
                {textos[locale]["Cervejas 600ML"].titulo}
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center items-stretch">
                {cervejas600.map((prato, index) => (
                  <CardapioCard
                    key={index}
                    titulo={prato.titulo[locale]}
                    descricao={prato.descricao[locale]}
                    preco={
                      Array.isArray(prato.preco)
                        ? prato.preco.map((p) =>
                            typeof p === "string" ? p : p[locale]
                          )
                        : typeof prato.preco === "string"
                        ? prato.preco
                        : prato.preco[locale]
                    }
                    imagem={prato.imagem}
                  />
                ))}
              </div>
            </div>
          </main>
        </CardapioCategoria>

        <CardapioCategoria categoria="Long Necks">
          <main className="bg-white text-black px-6 py-10 min-h-screen">
            <div className="max-w-7xl mx-auto space-y-12">
              <h1 className="text-4xl font-bold text-[#f98409] text-center mb-8">
                {textos[locale]["Long Necks"].titulo}
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center items-stretch">
                {longNecks.map((prato, index) => (
                  <CardapioCard
                    key={index}
                    titulo={prato.titulo[locale]}
                    descricao={prato.descricao[locale]}
                    preco={
                      Array.isArray(prato.preco)
                        ? prato.preco.map((p) =>
                            typeof p === "string" ? p : p[locale]
                          )
                        : typeof prato.preco === "string"
                        ? prato.preco
                        : prato.preco[locale]
                    }
                    imagem={prato.imagem}
                  />
                ))}
              </div>
            </div>
          </main>
        </CardapioCategoria>

        <CardapioCategoria categoria="Drinks">
          <main className="bg-white text-black px-6 py-10 min-h-screen">
            <div className="max-w-7xl mx-auto space-y-12">
              <h1 className="text-4xl font-bold text-[#f98409] text-center mb-8">
                {textos[locale]["Drinks"].titulo}
                <p className="text-lg font-normal text-zinc-600">
                  {textos[locale]["Drinks"].subtitulo}
                </p>
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center items-stretch">
                {drinks.map((prato, index) => (
                  <CardapioCard
                    key={index}
                    titulo={prato.titulo[locale]}
                    descricao={prato.descricao[locale]}
                    preco={
                      Array.isArray(prato.preco)
                        ? prato.preco.map((p) =>
                            typeof p === "string" ? p : p[locale]
                          )
                        : typeof prato.preco === "string"
                        ? prato.preco
                        : prato.preco[locale]
                    }
                    imagem={prato.imagem}
                  />
                ))}
              </div>
            </div>
          </main>
        </CardapioCategoria>

        <CardapioCategoria categoria="Caips">
          <main className="bg-white text-black px-6 py-10 min-h-screen">
            <div className="max-w-7xl mx-auto space-y-12">
              <h1 className="text-4xl font-bold text-[#f98409] text-center mb-8">
                {textos[locale]["Caips"].titulo}
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center items-stretch">
                {caips.map((prato, index) => (
                  <CardapioCard
                    key={index}
                    titulo={prato.titulo}
                    descricao={prato.descricao}
                    preco={
                      Array.isArray(prato.preco)
                        ? prato.preco.map((p) =>
                            typeof p === "string" ? p : p[locale]
                          )
                        : typeof prato.preco === "string"
                        ? prato.preco
                        : prato.preco[locale]
                    }
                    imagem={prato.imagem}
                  />
                ))}
              </div>
            </div>
          </main>
        </CardapioCategoria>

        <CardapioCategoria categoria="Sucos">
          <main className="bg-white text-black px-6 py-10 min-h-screen">
            <div className="max-w-7xl mx-auto space-y-12">
              <h1 className="text-4xl font-bold text-[#f98409] text-center mb-8">
                {textos[locale]["Sucos"].titulo}
                <p className="text-lg font-normal text-zinc-600">
                  {textos[locale]["Sucos"].subtitulo}
                </p>
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center items-stretch">
                {sucos.map((prato, index) => (
                  <CardapioCard
                    key={index}
                    titulo={prato.titulo[locale]}
                    descricao={prato.descricao[locale]}
                    preco={
                      Array.isArray(prato.preco)
                        ? prato.preco.map((p) =>
                            typeof p === "string" ? p : p[locale]
                          )
                        : typeof prato.preco === "string"
                        ? prato.preco
                        : prato.preco[locale]
                    }
                    imagem={prato.imagem}
                  />
                ))}
              </div>
            </div>
          </main>
        </CardapioCategoria>

        <CardapioCategoria categoria="Bebidas sem álcool">
          <main className="bg-white text-black px-6 py-10 min-h-screen">
            <div className="max-w-7xl mx-auto space-y-12">
              <h1 className="text-4xl font-bold text-[#f98409] text-center mb-8">
                {textos[locale]["Bebidas sem álcool"].titulo}
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center items-stretch">
                {zeroAlcool.map((prato, index) => (
                  <CardapioCard
                    key={index}
                    titulo={prato.titulo[locale]}
                    descricao={prato.descricao[locale]}
                    preco={
                      Array.isArray(prato.preco)
                        ? prato.preco.map((p) =>
                            typeof p === "string" ? p : p[locale]
                          )
                        : typeof prato.preco === "string"
                        ? prato.preco
                        : prato.preco[locale]
                    }
                    imagem={prato.imagem}
                  />
                ))}
              </div>
            </div>
          </main>
        </CardapioCategoria>

        <CardapioCategoria categoria="Cachaças (Dose)">
          <main className="bg-white text-black px-6 py-10 min-h-screen">
            <div className="max-w-7xl mx-auto space-y-12">
              <h1 className="text-4xl font-bold text-[#f98409] text-center mb-8">
                {textos[locale]["Cachaças (Dose)"].titulo}
                <p className="text-lg font-normal text-zinc-600">
                  {textos[locale]["Cachaças (Dose)"].subtitulo}
                </p>
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center items-stretch">
                {cachacaDose.map((prato, index) => (
                  <CardapioCard
                    key={index}
                    titulo={prato.titulo[locale]}
                    descricao={prato.descricao[locale]}
                    preco={
                      Array.isArray(prato.preco)
                        ? prato.preco.map((p) =>
                            typeof p === "string" ? p : p[locale]
                          )
                        : typeof prato.preco === "string"
                        ? prato.preco
                        : prato.preco[locale]
                    }
                    imagem={prato.imagem}
                  />
                ))}
              </div>
            </div>
          </main>
        </CardapioCategoria>

        <CardapioCategoria categoria="Vinhos">
          <main className="bg-white text-black px-6 py-10 min-h-screen">
            <div className="max-w-7xl mx-auto space-y-12">
              <h1 className="text-4xl font-bold text-[#f98409] text-center mb-8">
                {textos[locale]["Vinhos"].titulo}
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center items-stretch">
                {vinhos.map((prato, index) => (
                  <CardapioCard
                    key={index}
                    titulo={prato.titulo[locale]}
                    descricao={prato.descricao[locale]}
                    preco={
                      Array.isArray(prato.preco)
                        ? prato.preco.map((p) =>
                            typeof p === "string" ? p : p[locale]
                          )
                        : typeof prato.preco === "string"
                        ? prato.preco
                        : prato.preco[locale]
                    }
                    imagem={prato.imagem}
                  />
                ))}
              </div>
            </div>
          </main>
        </CardapioCategoria>

        <CardapioCategoria categoria="Destilados (Dose)">
          <main className="bg-white text-black px-6 py-10 min-h-screen">
            <div className="max-w-7xl mx-auto space-y-12">
              <h1 className="text-4xl font-bold text-[#f98409] text-center mb-8">
                {textos[locale]["Destilados (Dose)"].titulo}
                <p className="text-lg font-normal text-zinc-600">
                  {textos[locale]["Destilados (Dose)"].subtitulo}
                </p>
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center items-stretch">
                {destiladosDose.map((prato, index) => (
                  <CardapioCard
                    key={index}
                    titulo={prato.titulo[locale]}
                    descricao={prato.descricao[locale]}
                    preco={
                      Array.isArray(prato.preco)
                        ? prato.preco.map((p) =>
                            typeof p === "string" ? p : p[locale]
                          )
                        : typeof prato.preco === "string"
                        ? prato.preco
                        : prato.preco[locale]
                    }
                    imagem={prato.imagem}
                  />
                ))}
              </div>
            </div>
          </main>
        </CardapioCategoria>

        <CardapioCategoria categoria="Destilados (Garrafas)">
          <main className="bg-white text-black px-6 py-10 min-h-screen">
            <div className="max-w-7xl mx-auto space-y-12">
              <h1 className="text-4xl font-bold text-[#f98409] text-center mb-8">
                {textos[locale]["Destilados (Garrafas)"].titulo}
                <p className="text-lg font-normal text-zinc-600">
                  {textos[locale]["Destilados (Garrafas)"].subtitulo}
                </p>
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center items-stretch">
                {destiladosGarrafa.map((prato, index) => (
                  <CardapioCard
                    key={index}
                    titulo={prato.titulo[locale]}
                    descricao={prato.descricao[locale]}
                    preco={
                      Array.isArray(prato.preco)
                        ? prato.preco.map((p) =>
                            typeof p === "string" ? p : p[locale]
                          )
                        : typeof prato.preco === "string"
                        ? prato.preco
                        : prato.preco[locale]
                    }
                    imagem={prato.imagem}
                  />
                ))}
              </div>
            </div>
          </main>
        </CardapioCategoria>

        <CardapioCategoria categoria="Whiskys (Dose)">
          <main className="bg-white text-black px-6 py-10 min-h-screen">
            <div className="max-w-7xl mx-auto space-y-12">
              <h1 className="text-4xl font-bold text-[#f98409] text-center mb-8">
                {textos[locale]["Whiskys (Dose)"].titulo}
                <p className="text-lg font-normal text-zinc-600">
                  {textos[locale]["Whiskys (Dose)"].subtitulo}
                </p>
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center items-stretch">
                {whiskyDose.map((prato, index) => (
                  <CardapioCard
                    key={index}
                    titulo={prato.titulo[locale]}
                    descricao={prato.descricao[locale]}
                    preco={
                      Array.isArray(prato.preco)
                        ? prato.preco.map((p) =>
                            typeof p === "string" ? p : p[locale]
                          )
                        : typeof prato.preco === "string"
                        ? prato.preco
                        : prato.preco[locale]
                    }
                    imagem={prato.imagem}
                  />
                ))}
              </div>
            </div>
          </main>
        </CardapioCategoria>

        <CardapioCategoria categoria="Whiskys (Garrafas)">
          <main className="bg-white text-black px-6 py-10 min-h-screen">
            <div className="max-w-7xl mx-auto space-y-12">
              <h1 className="text-4xl font-bold text-[#f98409] text-center mb-8">
                {textos[locale]["Whiskys (Garrafas)"].titulo}
                <p className="text-lg font-normal text-zinc-600">
                  {textos[locale]["Whiskys (Garrafas)"].subtitulo}
                </p>
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center items-stretch">
                {whiskyGarrafa.map((prato, index) => (
                  <CardapioCard
                    key={index}
                    titulo={prato.titulo[locale]}
                    descricao={prato.descricao[locale]}
                    preco={
                      Array.isArray(prato.preco)
                        ? prato.preco.map((p) =>
                            typeof p === "string" ? p : p[locale]
                          )
                        : typeof prato.preco === "string"
                        ? prato.preco
                        : prato.preco[locale]
                    }
                    imagem={prato.imagem}
                  />
                ))}
              </div>
            </div>
          </main>
        </CardapioCategoria>

        <CardapioCategoria categoria="Growler">
          <main className="bg-white text-black px-6 py-10 min-h-screen">
            <div className="max-w-7xl mx-auto space-y-12">
              <h1 className="text-4xl font-bold text-[#f98409] text-center mb-8">
                {textos[locale]["Growler"].titulo}
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center items-stretch">
                {growler.map((prato, index) => (
                  <CardapioCard
                    key={index}
                    titulo={prato.titulo[locale]}
                    descricao={prato.descricao[locale]}
                    preco={
                      Array.isArray(prato.preco)
                        ? prato.preco.map((p) =>
                            typeof p === "string" ? p : p[locale]
                          )
                        : typeof prato.preco === "string"
                        ? prato.preco
                        : prato.preco[locale]
                    }
                    imagem={prato.imagem}
                  />
                ))}
              </div>
            </div>
          </main>
        </CardapioCategoria>

        <CardapioCategoria categoria="Souvenir">
          <main className="bg-white text-black px-6 py-10 min-h-screen">
            <div className="max-w-7xl mx-auto space-y-12">
              <h1 className="text-4xl font-bold text-[#f98409] text-center mb-8">
                {textos[locale]["Souvenir"].titulo}
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center items-stretch">
                {souvenir.map((prato, index) => (
                  <CardapioCard
                    key={index}
                    titulo={prato.titulo[locale]}
                    descricao={prato.descricao[locale]}
                    preco={prato.preco}
                    imagem={prato.imagem}
                  />
                ))}
              </div>
            </div>
          </main>
        </CardapioCategoria>
      </CardapioTabs>
      <ScrollToTopButton />
    </>
  );
}
