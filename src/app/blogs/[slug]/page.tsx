import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import {
  POST_QUERY,
  POSTS_QUERY,
  type Post,
  type PostSummary,
} from "@/sanity/lib/queries";
import { PortableText } from "@/components/portable-text";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Separator } from "@/components/ui/separator";
import { BlogPostHeader } from "@/components/blog-post-header";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await client.fetch<Post | null>(POST_QUERY, { slug });
  if (!post) return {};
  return {
    title: post.title ?? undefined,
    description: post.excerpt ?? "",
    robots: { index: false, follow: false },
  };
}

export async function generateStaticParams() {
  const posts = await client.fetch<PostSummary[]>(POSTS_QUERY);
  return posts.map((post) => ({ slug: post.slug?.current }));
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await client.fetch<Post | null>(
    POST_QUERY,
    { slug },
    { next: { revalidate: 60 } }
  );

  if (!post) notFound();

  return (
    <div className="bg-background">
      <Header />
      <main className="mx-auto max-w-4xl relative flex flex-col">
        <article className="p-4 lg:p-8">
          <BlogPostHeader post={post} />
          {post.body && (
            <div className="text-foreground leading-relaxed">
              <PortableText value={post.body} />
            </div>
          )}
        </article>
        <Separator />
        <Footer />
      </main>
    </div>
  );
}
