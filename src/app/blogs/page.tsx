import { client } from "@/sanity/lib/client";
import { POSTS_QUERY, type PostSummary } from "@/sanity/lib/queries";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Separator } from "@/components/ui/separator";
import { BlogPostCard } from "@/components/blog-post-card";

export const metadata = {
  title: "Blogs | Jagrit Gumber",
  description: "Case studies, thoughts, and long-form writing",
};

export default async function BlogsPage() {
  const posts = await client.fetch<PostSummary[]>(
    POSTS_QUERY,
    {},
    { next: { revalidate: 60 } }
  );

  return (
    <div className="bg-background">
      <Header />
      <main className="mx-auto max-w-4xl relative flex flex-col">
        <section aria-label="Blogs" className="p-4 lg:p-8">
          <h1 className="font-serif text-3xl text-foreground">Blogs</h1>
          <span className="text-muted-foreground block mb-6">
            Case studies, thoughts, and things I&apos;ve learned along the way.
          </span>
          {posts.length === 0 ? (
            <p className="text-muted-foreground text-center py-12">
              No blogs yet. Check back soon.
            </p>
          ) : (
            <div className="flex flex-col gap-4">
              {posts.map((post) => (
                <BlogPostCard key={post._id} post={post} />
              ))}
            </div>
          )}
        </section>
        <Separator />
        <Footer />
      </main>
    </div>
  );
}
