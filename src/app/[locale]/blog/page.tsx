import { getPosts } from "@/lib/mdx";
import { useTranslations } from "next-intl";
import Link from "next/link";

export const metadata = { title: "Blog" };

export default async function BlogPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const posts = await getPosts(locale);
  const t = useTranslations("blog");

  if (posts.length === 0) {
    return (
      <p className="text-neutral-600 dark:text-neutral-300">{t("empty")}</p>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">{t("title")}</h1>
      <ul className="space-y-3">
        {posts.map((p) => (
          <li
            key={p.slug}
            className="border rounded-lg p-4 hover:bg-neutral-50 dark:hover:bg-neutral-900"
          >
            <Link href={`/blog/${p.slug}`} className="text-lg font-medium">
              {p.title}
            </Link>
            <div className="text-sm text-neutral-500 mt-1">{p.date}</div>
            {p.summary && (
              <p className="mt-2 text-neutral-700 dark:text-neutral-300">
                {p.summary}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
