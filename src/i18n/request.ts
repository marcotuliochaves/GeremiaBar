import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => {
  const currentLocale = locale ?? "pt"; // garante que nunca será undefined

  return {
    locale: currentLocale,
    messages: (await import(`../../messages/${currentLocale}.json`)).default,
  };
});
