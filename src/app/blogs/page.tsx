import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { POSTS_QUERY, type PostSummary } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Separator } from "@/components/ui/separator";

export const metadata = {
	title: "Blogs | Jagrit Gumber",
	description: "Case studies, thoughts, and long-form writing",
};

export default async function JournalPage() {
	const posts = await client.fetch<PostSummary[]>(POSTS_QUERY, {}, { next: { revalidate: 60 } });

	return (
		<div className="bg-background">
			<Header />
			<main className="mx-auto max-w-4xl relative flex flex-col px-6 py-12">
				<h1 className="text-4xl font-serif text-foreground mb-2">Blogs</h1>
				<p className="text-muted-foreground mb-12">
					Case studies, thoughts, and things I&apos;ve learned along the way.
				</p>

				{posts.length === 0 ? (
					<p className="text-muted-foreground text-center py-20">
						No posts yet. Check back soon.
					</p>
				) : (
					<div className="grid gap-8">
						{posts.map((post) => (
							<Link
								key={post._id}
								href={`/blogs/${post.slug?.current}`}
								className="group block rounded-xl border border-border p-6 transition-colors hover:bg-muted-background"
							>
								<div className="flex flex-col sm:flex-row gap-6">
									{post.mainImage && (
										<img
											src={urlFor(post.mainImage)
												.width(300)
												.height(200)
												.url()}
											alt={post.title ?? ""}
											className="rounded-lg w-full sm:w-48 h-32 object-cover"
										/>
									)}
									<div className="flex-1">
										<h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
											{post.title}
										</h2>
										{post.excerpt && (
											<p className="text-muted-foreground mt-2 line-clamp-2">
												{post.excerpt}
											</p>
										)}
										<div className="flex items-center gap-3 mt-3">
											{post.publishedAt && (
												<time className="text-sm text-muted-foreground">
													{new Date(post.publishedAt).toLocaleDateString(
														"en-US",
														{
															year: "numeric",
															month: "long",
															day: "numeric",
														},
													)}
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
									</div>
								</div>
							</Link>
						))}
					</div>
				)}
				<Separator />
				<Footer />
			</main>
		</div>
	);
}
