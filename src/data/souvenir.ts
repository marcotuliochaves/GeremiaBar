// src/data/souvenir.ts
type TextoBilíngue = {
  pt: string;
  en: string;
};

export type Souvenir = {
  titulo: TextoBilíngue;
  descricao: TextoBilíngue;
  preco: string | string[];
  imagem: string;
};

export const souvenir: Souvenir[] = [
  {
    titulo: {
      pt: "Cachaça Geremia Ouro",
      en: "Cachaça Geremia Gold",
    },
    descricao: {
      pt: "",
      en: "",
    },
    preco: "R$ 100,00",
    imagem: "/destilados/souvenir-cachaca-ouro.webp",
  },
  {
    titulo: {
      pt: "Cachaça Geremia Prata",
      en: "Cachaça Geremia Silver",
    },
    descricao: {
      pt: "",
      en: "",
    },
    preco: "R$ 90,00",
    imagem: "/destilados/souvenir-cachaca-prata.webp",
  },
  {
    titulo: {
      pt: "Camiseta Geremia Mineiridade – Branca",
      en: "Geremia Mineiridade T-Shirt – White",
    },
    descricao: {
      pt: "​",
      en: "",
    },
    preco: "R$ 70,00",
    imagem: "/souvenir/souvenir-camiseta-branca.webp",
  },
  {
    titulo: {
      pt: "Camiseta Geremia Mineiridade – Verde",
      en: "Geremia Mineiridade T-Shirt – Green",
    },
    descricao: {
      pt: "",
      en: "",
    },
    preco: "R$ 70,00",
    imagem: "/souvenir/souvenir-camiseta-verde.webp",
  },
  {
    titulo: {
      pt: "Tulipa Geremia",
      en: "Tulip Geremia",
    },
    descricao: {
      pt: "",
      en: "",
    },
    preco: "R$ 20,00",
    imagem: "/souvenir/souvenir-tulipa.webp",
  },
  {
    titulo: {
      pt: "Canequinha Geremia",
      en: "Geremia Mug",
    },
    descricao: {
      pt: "",
      en: "",
    },
    preco: "R$ 29,90",
    imagem: "/souvenir/souvenir-canequinha.webp",
  },
];
