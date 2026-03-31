import { defineQuery } from "next-sanity";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export type PostSummary = {
	_id: string;
	title: string | null;
	slug: { current: string } | null;
	publishedAt: string | null;
	excerpt: string | null;
	mainImage: SanityImageSource | null;
	categories: Array<{ _id: string; title: string | null }> | null;
};

export type Post = PostSummary & {
	body: unknown[] | null;
};

export type ProjectSummary = {
	_id: string;
	title: string | null;
	slug: { current: string } | null;
	description: string | null;
	mainImage: SanityImageSource | null;
	projectUrl: string | null;
	repoUrl: string | null;
	tags: string[] | null;
	body: unknown[] | null;
};

export const POSTS_QUERY = defineQuery(
	`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
		_id,
		title,
		slug,
		publishedAt,
		excerpt,
		mainImage,
		categories[]->{ _id, title }
	}`,
);

export const POST_QUERY = defineQuery(
	`*[_type == "post" && slug.current == $slug][0] {
		_id,
		title,
		slug,
		publishedAt,
		excerpt,
		body,
		mainImage,
		categories[]->{ _id, title }
	}`,
);

export const PROJECTS_QUERY = defineQuery(
	`*[_type == "project" && defined(slug.current)] | order(order asc) {
		_id,
		title,
		slug,
		description,
		mainImage,
		projectUrl,
		repoUrl,
		tags,
		body
	}`,
);

export const PROJECT_QUERY = defineQuery(
	`*[_type == "project" && slug.current == $slug][0] {
		_id,
		title,
		slug,
		description,
		body,
		mainImage,
		projectUrl,
		repoUrl,
		tags
	}`,
);
