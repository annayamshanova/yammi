import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { HomeHero } from "@/components/HomeHero";
import { notFound } from "next/navigation";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return <HomeHero locale={locale} dict={dict} />;
}
