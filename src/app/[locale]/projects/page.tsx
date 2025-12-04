import { useTranslations } from "next-intl";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  const t = useTranslations("projects");
  return (
    <article className="prose dark:prose-invert">
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
    </article>
  );
}

