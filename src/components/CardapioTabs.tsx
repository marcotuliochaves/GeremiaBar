"use client";
import React, { useState, useEffect } from "react";

type Principal = "Comidas" | "Bebidas" | "Souvenir";

interface CardapioTabsProps {
  children: React.ReactNode;
  locale: "pt" | "en";
}

export default function CardapioTabs({ children, locale }: CardapioTabsProps) {
  const [categoriaPrincipal, setCategoriaPrincipal] =
    useState<Principal>("Comidas");
  const [categoriaAtiva, setCategoriaAtiva] = useState<string | null>(
    "Porções"
  );

  const categorias: Record<Principal, string[]> = {
    Comidas: [
      "Porções",
      "Pratos",
      "Para Acompanhar",
      "Saladinha",
      "Vegetarianos",
      "Sandubão",
      "Caldinhos",
      "Sobremesas",
    ],
    Bebidas: [
      "Chopps",
      "Cervejas 600ML",
      "Long Necks",
      "Drinks",
      "Caips",
      "Sucos",
      "Bebidas sem álcool",
      "Cachaças (Dose)",
      "Vinhos",
      "Destilados (Dose)",
      "Destilados (Garrafas)",
      "Whiskys (Dose)",
      "Whiskys (Garrafas)",
      "Growler",
    ],
    Souvenir: [],
  };

  const traducoes: Record<"pt" | "en", Record<string, string>> = {
    pt: {
      Comidas: "Comidas",
      Bebidas: "Bebidas",
      Souvenir: "Souvenir",
      Porções: "Porções",
      Pratos: "Pratos",
      "Para Acompanhar": "Para Acompanhar",
      Saladinha: "Saladinha",
      Vegetarianos: "Vegetarianos",
      Sandubão: "Sandubão",
      Caldinhos: "Caldinhos",
      Sobremesas: "Sobremesas",
      Chopps: "Chopps",
      "Cervejas 600ML": "Cervejas 600ML",
      "Long Necks": "Long Necks",
      Drinks: "Drinks",
      Caips: "Caips",
      Sucos: "Sucos",
      "Bebidas sem álcool": "Bebidas sem álcool",
      "Cachaças (Dose)": "Cachaças (Dose)",
      Vinhos: "Vinhos",
      "Destilados (Dose)": "Destilados (Dose)",
      "Destilados (Garrafas)": "Destilados (Garrafas)",
      "Whiskys (Dose)": "Whiskys (Dose)",
      "Whiskys (Garrafas)": "Whiskys (Garrafas)",
      Growler: "Growler",
    },
    en: {
      Comidas: "Food",
      Bebidas: "Drinks",
      Souvenir: "Souvenirs",
      Porções: "Appetizers",
      Pratos: "Main Course",
      "Para Acompanhar": "Sides",
      Saladinha: "Salads",
      Vegetarianos: "Vegetarian",
      Sandubão: "Sandwiches",
      Caldinhos: "Soups",
      Sobremesas: "Desserts",
      Chopps: "Draft Beer",
      "Cervejas 600ML": "600ML Beers",
      "Long Necks": "Long Necks",
      Drinks: "Cocktails",
      Caips: "Caipirinhas",
      Sucos: "Juices",
      "Bebidas sem álcool": "Non-alcoholic",
      "Cachaças (Dose)": "Cachaças (Shot)",
      Vinhos: "Wines",
      "Destilados (Dose)": "Spirits (Shot)",
      "Destilados (Garrafas)": "Spirits (Bottle)",
      "Whiskys (Dose)": "Whiskies (Shot)",
      "Whiskys (Garrafas)": "Whiskies (Bottle)",
      Growler: "Growler",
    },
  };

  useEffect(() => {
    if (categorias[categoriaPrincipal].length > 0) {
      setCategoriaAtiva(categorias[categoriaPrincipal][0]);
    } else {
      setCategoriaAtiva(null);
    }
  }, [categoriaPrincipal]);

  const activeChild =
    React.Children.toArray(children).find((child: any) => {
      if (!categoriaPrincipal) return false;
      if (categoriaPrincipal === "Souvenir") {
        return child?.props?.categoria === "Souvenir";
      }
      return child?.props?.categoria === categoriaAtiva;
    }) ?? null;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-6 pt-28">
      {/* Navegação principal */}
      <div className="flex flex-wrap gap-4 justify-center">
        {(Object.keys(categorias) as Principal[]).map((principal) => (
          <button
            key={principal}
            onClick={() => setCategoriaPrincipal(principal)}
            className={`px-6 py-2 rounded-full font-semibold text-base transition-colors duration-200 shadow-sm border ${
              categoriaPrincipal === principal
                ? "bg-[#f98409] text-white border-[#f98409]"
                : "bg-zinc-100 text-zinc-700 border-zinc-200"
            }`}
          >
            {traducoes[locale]?.[principal] ?? principal}
          </button>
        ))}
      </div>

      {/* Subcategorias */}
      {categoriaPrincipal && categorias[categoriaPrincipal].length > 0 && (
        <div className="overflow-x-auto md:overflow-visible whitespace-nowrap md:whitespace-normal flex gap-2 md:flex-wrap justify-start md:justify-center px-2 scrollbar-hide">
          {categorias[categoriaPrincipal].map((sub) => (
            <button
              key={sub}
              onClick={() => setCategoriaAtiva(sub)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                categoriaAtiva === sub
                  ? "bg-[#f98409] text-white border-[#f98409]"
                  : "bg-zinc-100 text-zinc-700 border-zinc-200"
              }`}
            >
              {traducoes[locale]?.[sub] ?? sub}
            </button>
          ))}
        </div>
      )}

      {/* Conteúdo da subcategoria ativa */}
      <div>{activeChild}</div>
    </div>
  );
}
