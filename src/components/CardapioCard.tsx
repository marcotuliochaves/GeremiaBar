import Image from "next/image";

type CardapioCardProps = {
  titulo: string;
  descricao: string;
  preco: string | string[];
  imagem: string;
};

export default function CardapioCard({
  titulo,
  descricao,
  preco,
  imagem,
}: CardapioCardProps) {
  return (
    <article className="relative flex flex-row bg-white rounded-xl shadow-md border border-zinc-200 w-full max-w-2xl overflow-hidden">
      {/* Imagem */}
      <div className="w-40 h-45 md:w-48 md:h-48 flex-shrink-0">
        <Image
          src={imagem}
          alt={titulo}
          width={600}
          height={400}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col flex-grow p-4">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-[#1d1c1c] mb-1">{titulo}</h3>
          <p className="text-sm text-zinc-500 leading-snug">{descricao}</p>
        </div>
        {/* Área de preços */}
        <div className="flex justify-end mt-2">
          {Array.isArray(preco) ? (
            <div className="flex flex-col items-end space-y-1">
              {preco.map((item, i) => (
                <span key={i} className="text-[#f98409] font-bold text-base">
                  {item}
                </span>
              ))}
            </div>
          ) : (
            <span className="text-[#f98409] font-bold text-base">{preco}</span>
          )}
        </div>
      </div>
    </article>
  );
}
