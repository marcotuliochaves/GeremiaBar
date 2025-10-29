// src/types/itemCardapio.ts
export type TextoBilíngue = {
  pt: string;
  en: string;
};

export type ItemCardapio = {
  titulo: TextoBilíngue;
  descricao: TextoBilíngue;
  preco: string | string[] | TextoBilíngue[];
  imagem: string;
};
