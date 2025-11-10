import Image from "next/image";
import Link from "next/link";

type FooterProps = {
  locale: "pt" | "en";
};

export default function Footer({ locale }: FooterProps) {
  const text = locale === "pt" ? t.pt : t.en;

  return (
    /* Backup verde  <footer className="bg-[#1E2719] text-white px-6 py-10 mt-12">*/
    <footer className="bg-[#494d52] text-white px-6 py-10 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Horário */}
        <div>
          <h2 className="text-center text-xl font-bold mb-4 text-yellow-400">
            {text.horario}
          </h2>
          <ul className="text-center text-lg space-y-2">
            <li>{text.segSex}</li>
            <li>{text.sab}</li>
            <li>{text.dom}</li>
          </ul>
        </div>

        {/* Parceiros */}
        <div className="mb-10">
          <h2 className="text-center text-xl font-bold mb-4 text-yellow-400">
            {text.parceiros}
          </h2>
          <div className="flex justify-center flex-wrap gap-6 items-center">
            <Image
              src="/baden.svg"
              alt="Baden Baden"
              width={130}
              height={130}
              style={{ width: "auto", height: "auto" }}
              className="max-h-20 w-auto"
            />
            <Image
              src="/amstel.svg"
              alt="Amstel"
              width={130}
              height={130}
              style={{ width: "auto", height: "auto" }}
              className="max-h-20 w-auto"
            />
            <Image
              src="/heineken.svg"
              alt="Heineken"
              width={130}
              height={130}
              style={{ width: "auto", height: "auto" }}
              className="max-h-20 w-auto"
            />
          </div>
        </div>
      </div>

      <div className="flex gap-5 justify-center -mb-8">
        <Link
          href={`https://www.tripadvisor.com.br/Restaurant_Review-g1959794-d8733589-Reviews-Geremia_Bar-Uberaba_State_of_Minas_Gerais.html`}
        >
          <Image
            src="/tripadvisor-logo.svg"
            alt="Tripadvisor"
            width={130}
            height={130}
            style={{ width: "auto", height: "auto" }}
            className="max-h-10 w-auto"
          />
        </Link>
        <Link href={`https://www.instagram.com/geremiabar/`}>
          <Image
            src="/instagram-logo.svg"
            alt="Instagram"
            width={130}
            height={130}
            style={{ width: "auto", height: "auto" }}
            className="max-h-10 w-auto"
          />
        </Link>
        <Link href={`https://www.facebook.com/geremiabar`}>
          <Image
            src="/facebook-logo.svg"
            alt="Facebook"
            width={130}
            height={130}
            style={{ width: "auto", height: "auto" }}
            className="max-h-10 w-auto"
          />
        </Link>
      </div>
      {/* Mapa */}
      <div className="max-w-4xl mx-auto mt-12 rounded-xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d331.90318303760637!2d-47.93829138314336!3d-19.752781062174993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bad0369198429d%3A0xd7dbbf83adeb111f!2sGeremia%20Bar!5e0!3m2!1spt-BR!2sbr!4v1761586088929!5m2!1spt-BR!2sbr"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Direitos */}
      <div className="mt-10 text-center text-sm text-zinc-400">
        &copy; {new Date().getFullYear()} Geremia Bar. {text.direitos}
      </div>
    </footer>
  );
}

const t = {
  pt: {
    horario: "Horário de Funcionamento",
    parceiros: "Nossos Parceiros",
    segSex: "Segunda a Sexta: 17:00 – 00:00",
    sab: "Sábado: 11:00 – 00:00",
    dom: "Domingo: Fechado",
    direitos: "Todos os direitos reservados.",
  },
  en: {
    horario: "Opening Hours",
    parceiros: "Our Partners",
    segSex: "Monday to Friday: 5pm – 12am",
    sab: "Saturday: 11am – 12am",
    dom: "Sunday: Closed",
    direitos: "All rights reserved.",
  },
};
