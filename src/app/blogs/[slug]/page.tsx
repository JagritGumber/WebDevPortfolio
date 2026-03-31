import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { POST_QUERY, POSTS_QUERY, type Post, type PostSummary } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@/components/portable-text";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Separator } from "@/components/ui/separator";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params;
	const post = await client.fetch<Post | null>(POST_QUERY, { slug });
	if (!post) return {};
	return {
		title: `${post.title} | Jagrit Gumber`,
		description: post.excerpt ?? "",
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
		{ next: { revalidate: 60 } },
	);

	if (!post) notFound();

	return (
		<div className="bg-background">
			<Header />
			<main className="mx-auto max-w-4xl relative flex flex-col px-6 py-12">
				<Link
					href="/blogs"
					className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 inline-block"
				>
					&larr; Back to Blogs
				</Link>

				{post.mainImage && (
					<img
						src={urlFor(post.mainImage).width(1200).height(600).url()}
						alt={post.title ?? ""}
						className="rounded-xl w-full h-64 sm:h-80 object-cover mb-8"
					/>
				)}

				<h1 className="text-3xl sm:text-4xl font-serif text-foreground mb-4">
					{post.title}
				</h1>

				<div className="flex items-center gap-3 mb-8">
					{post.publishedAt && (
						<time className="text-sm text-muted-foreground">
							{new Date(post.publishedAt).toLocaleDateString("en-US", {
								year: "numeric",
								month: "long",
								day: "numeric",
							})}
						</time>
					)}
					{post.categories && post.categories.length > 0 && (
						<div className="flex gap-2">
							{post.categories.map((cat) => (
								<span
									key={cat?._id}
									className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary"
								>
									{cat?.title}
								</span>
							))}
						</div>
					)}
				</div>

				{post.body && (
					<article className="prose prose-neutral dark:prose-invert max-w-none">
						<PortableText value={post.body} />
					</article>
				)}
				<Separator />
				<Footer />
			</main>
		</div>
	);
}
