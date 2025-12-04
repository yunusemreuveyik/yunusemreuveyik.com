import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  summary?: string;
  tags?: string[];
};

const contentRoot = path.join(process.cwd(), "content");

export async function getPosts(locale: string): Promise<PostMeta[]> {
  const dir = path.join(contentRoot, locale, "blog");
  let files: string[] = [];
  try {
    files = await fs.readdir(dir);
  } catch {
    return [];
  }
  const posts: PostMeta[] = [];
  for (const file of files) {
    if (!file.endsWith(".mdx") && !file.endsWith(".md")) continue;
    const raw = await fs.readFile(path.join(dir, file), "utf8");
    const { data } = matter(raw);
    posts.push({
      slug: file.replace(/\.(mdx|md)$/, ""),
      title: data.title ?? file,
      date: data.date ?? "",
      summary: data.summary ?? "",
      tags: data.tags ?? [],
    });
  }
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostHtml(locale: string, slug: string) {
  const filePath = path.join(contentRoot, locale, "blog", `${slug}.mdx`);
  const raw = await fs.readFile(filePath, "utf8");
  const { content, data } = matter(raw);

  const processor = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { behavior: "append" })
    .use(rehypePrettyCode, {
      theme: "github-dark-default",
    })
    .use(rehypeStringify);

  const file = await processor.process(content);
  return { html: String(file), meta: data as Omit<PostMeta, "slug"> };
}
