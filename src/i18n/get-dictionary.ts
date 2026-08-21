import type { Locale } from "./config";
import type { Dictionary } from "./dictionaries/type";
import en from "./dictionaries/en";
import de from "./dictionaries/de";
import uk from "./dictionaries/uk";

const dictionaries: Record<Locale, Dictionary> = { en, de, uk };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en;
}
