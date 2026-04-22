import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import type { Post } from "@/sanity/lib/queries";

export const BlogPostHeader = ({ post }: { post: Post }) => {
  const date = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <>
      <Link
        href="/blogs"
        className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-6 inline-block"
      >
        &larr; Back to Blogs
      </Link>
      {post.mainImage && (
        <div className="relative w-full aspect-video rounded-md overflow-hidden mb-6">
          <Image
            src={urlFor(post.mainImage).width(1200).height(675).url()}
            alt={post.title ?? ""}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
          />
        </div>
      )}
      <h1 className="font-serif text-3xl text-foreground">{post.title}</h1>
      <div className="flex items-center gap-3 mt-2 mb-6 flex-wrap">
        {date && <time className="text-sm text-muted-foreground">{date}</time>}
        {post.categories?.map((cat) => (
          <span
            key={cat?._id}
            className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary"
          >
            {cat?.title}
          </span>
        ))}
      </div>
    </>
  );
};
