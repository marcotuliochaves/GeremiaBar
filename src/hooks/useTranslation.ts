import pt from "@/messages/pt.json";
import en from "@/messages/en.json";

type Locale = "pt" | "en";
type Messages = typeof pt;

export function useTranslation(locale: Locale): Messages {
  if (locale === "en") return en;
  return pt;
}
