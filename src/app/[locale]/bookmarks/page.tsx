import { useTranslations } from "next-intl";

export const metadata = { title: "Bookmarks" };

export default function BookmarksPage() {
  const t = useTranslations("bookmarks");
  return (
    <article className="prose dark:prose-invert">
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
    </article>
  );
}

