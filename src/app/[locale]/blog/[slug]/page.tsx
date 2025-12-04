import { getPostHtml } from "@/lib/mdx";
import { notFound } from "next/navigation";

export default async function PostPage({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string };
}) {
  try {
    const { html, meta } = await getPostHtml(locale, slug);
    return (
      <article
        className="prose dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  } catch {
    notFound();
  }
}
