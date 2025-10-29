"use client";
interface CardapioCategoriaProps {
  categoria: string;
  children: React.ReactNode;
}
export default function CardapioCategoria({
  categoria,
  children,
}: CardapioCategoriaProps) {
  return (
    <section id={categoria} className="space-y-6">
      {children}
    </section>
  );
}
