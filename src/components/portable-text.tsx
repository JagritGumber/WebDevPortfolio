import {
	PortableText as SanityPortableText,
	type PortableTextComponents,
} from "next-sanity";
import { urlFor } from "@/sanity/lib/image";

const components: PortableTextComponents = {
	block: {
		normal: ({ children }) => <p className="mb-4">{children}</p>,
		h1: ({ children }) => <h1 className="text-3xl font-serif mb-4">{children}</h1>,
		h2: ({ children }) => <h2 className="text-2xl font-serif mb-3">{children}</h2>,
		h3: ({ children }) => <h3 className="text-xl font-semibold mb-2">{children}</h3>,
		h4: ({ children }) => <h4 className="text-lg font-semibold mb-2">{children}</h4>,
		blockquote: ({ children }) => <blockquote className="border-l-4 border-primary pl-4 italic mb-4">{children}</blockquote>,
	},
	types: {
		image: ({ value }) => {
			if (!value?.asset?._ref) return null;
			return (
				<figure className="my-8">
					<img
						src={urlFor(value).width(1200).url()}
						alt={value.alt || ""}
						className="rounded-lg w-full"
					/>
					{value.caption && (
						<figcaption className="text-center text-sm text-muted-foreground mt-2">
							{value.caption}
						</figcaption>
					)}
				</figure>
			);
		},
		code: ({ value }) => (
			<pre className="rounded-lg bg-muted-background p-4 overflow-x-auto my-6">
				<code className="text-sm font-mono">{value.code}</code>
			</pre>
		),
	},
	marks: {
		link: ({ children, value }) => (
			<a
				href={value?.href}
				target="_blank"
				rel="noopener noreferrer"
				className="text-primary underline underline-offset-2 hover:text-primary/80"
			>
				{children}
			</a>
		),
		code: ({ children }) => (
			<code className="bg-muted-background px-1.5 py-0.5 rounded text-sm font-mono">
				{children}
			</code>
		),
	},
};

export function PortableText({ value }: { value: unknown[] }) {
	return <SanityPortableText value={value as Parameters<typeof SanityPortableText>[0]["value"]} components={components} />;
}
