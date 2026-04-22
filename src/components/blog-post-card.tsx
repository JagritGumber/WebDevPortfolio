import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import type { PostSummary } from "@/sanity/lib/queries";

export const BlogPostCard = ({ post }: { post: PostSummary }) => {
  const date = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <Link
      href={`/blogs/${post.slug?.current}`}
      className="group flex flex-col sm:flex-row gap-4 bg-muted-background rounded-md overflow-hidden border border-border hover:border-foreground/40 transition-colors"
    >
      {post.mainImage && (
        <div className="relative w-full sm:w-56 aspect-video sm:aspect-auto sm:h-auto shrink-0">
          <Image
            src={urlFor(post.mainImage).width(600).height(400).url()}
            alt={post.title ?? ""}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 224px"
          />
        </div>
      )}
      <div className="flex-1 p-4 sm:py-4 sm:pr-4 sm:pl-0 flex flex-col">
        <h2 className="text-2xl font-serif text-foreground group-hover:text-primary transition-colors">
          {post.title}
        </h2>
        {post.excerpt && (
          <p className="text-muted-foreground mt-1 line-clamp-2">
            {post.excerpt}
          </p>
        )}
        <div className="flex items-center gap-3 mt-auto pt-3 flex-wrap">
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
      </div>
    </Link>
  );
};
