import CardapioCard from "@/components/CardapioCard";
import CardapioTabs from "@/components/CardapioTabs";
import CardapioCategoria from "@/components/CardapioCategoria";
import ScrollToTopButton from "@/components/ScrollToTopButton";

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
import type { TextoBilíngue } from "@/types/itemCardapio";

interface CardapioPageProps {
  params: Promise<{ locale: "pt" | "en" }>;
}

export default async function CardapioPage({ params }: CardapioPageProps) {
  const { locale } = await params;

  const textos: Record<
    "pt" | "en",
    Record<string, { titulo: string; subtitulo: string }>
  > = {
    pt: {
      Porções: { titulo: "Porções", subtitulo: "Não sai de moda!" },
      Pratos: { titulo: "Pratos", subtitulo: "Digno de Reis e Rainhas!" },
      "Para Acompanhar": { titulo: "Para Acompanhar", subtitulo: "" },
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
      "Bebidas sem álcool": { titulo: "Bebidas sem álcool", subtitulo: "" },
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
      "Para Acompanhar": { titulo: "Sides", subtitulo: "" },
      Saladinha: { titulo: "Salads", subtitulo: "Going light today!" },
      Vegetarianos: { titulo: "Vegetarian", subtitulo: "No meat!" },
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

  const renderCardapio = (categoria: string, itens: any[]) => (
    <CardapioCategoria categoria={categoria} key={categoria}>
      <main className="bg-white text-black px-6 py-10 min-h-screen">
        <div className="max-w-7xl mx-auto space-y-12">
          <h1 className="text-4xl font-bold text-[#f98409] text-center mb-8">
            {textos[locale][categoria]?.titulo || categoria}
            {textos[locale][categoria]?.subtitulo && (
              <p className="text-lg font-normal text-zinc-600">
                {textos[locale][categoria].subtitulo}
              </p>
            )}
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center items-stretch">
            {itens.map((item, index) => (
              <CardapioCard
                key={index}
                titulo={item.titulo[locale]}
                descricao={item.descricao[locale]}
                preco={
                  Array.isArray(item.preco)
                    ? item.preco.map((p: string | TextoBilíngue) =>
                        typeof p === "string" ? p : p[locale]
                      )
                    : typeof item.preco === "string"
                    ? item.preco
                    : item.preco[locale]
                }
                imagem={item.imagem}
              />
            ))}
          </div>
        </div>
      </main>
    </CardapioCategoria>
  );

  return (
    <>
      <CardapioTabs locale={locale}>
        {renderCardapio("Porções", pratosPorcoes)}
        {renderCardapio("Pratos", pratosPrincipais)}
        {renderCardapio("Para Acompanhar", paraAcompanhar)}
        {renderCardapio("Saladinha", saladinha)}
        {renderCardapio("Vegetarianos", vegetarianos)}
        {renderCardapio("Sandubão", sanduiche)}
        {renderCardapio("Caldinhos", caldinhos)}
        {renderCardapio("Sobremesas", sobremesas)}
        {renderCardapio("Chopps", chopps)}
        {renderCardapio("Cervejas 600ML", cervejas600)}
        {renderCardapio("Long Necks", longNecks)}
        {renderCardapio("Drinks", drinks)}
        {renderCardapio("Caips", caips)}
        {renderCardapio("Sucos", sucos)}
        {renderCardapio("Bebidas sem álcool", zeroAlcool)}
        {renderCardapio("Cachaças (Dose)", cachacaDose)}
        {renderCardapio("Vinhos", vinhos)}
        {renderCardapio("Destilados (Dose)", destiladosDose)}
        {renderCardapio("Destilados (Garrafas)", destiladosGarrafa)}
        {renderCardapio("Whiskys (Dose)", whiskyDose)}
        {renderCardapio("Whiskys (Garrafas)", whiskyGarrafa)}
        {renderCardapio("Growler", growler)}
        {renderCardapio("Souvenir", souvenir)}
      </CardapioTabs>
      <ScrollToTopButton />
    </>
  );
}
