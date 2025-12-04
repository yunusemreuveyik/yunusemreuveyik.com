import { useTranslations } from "next-intl";

export const metadata = { title: "About" };

export default function AboutPage() {
  const t = useTranslations("about");
  return (
    <article className="prose dark:prose-invert">
      <h1>{t("title")}</h1>
      <p>{t("p1")}</p>
      <p>{t("p2")}</p>
    </article>
  );
}
