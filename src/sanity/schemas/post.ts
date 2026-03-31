import { defineField, defineType } from "sanity";

export const post = defineType({
	name: "post",
	title: "Blog Post",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			options: { source: "title", maxLength: 96 },
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "publishedAt",
			title: "Published At",
			type: "datetime",
			initialValue: () => new Date().toISOString(),
		}),
		defineField({
			name: "excerpt",
			title: "Excerpt",
			type: "text",
			rows: 3,
			description: "A short summary for previews and SEO",
		}),
		defineField({
			name: "mainImage",
			title: "Cover Image",
			type: "image",
			options: { hotspot: true },
		}),
		defineField({
			name: "categories",
			title: "Categories",
			type: "array",
			of: [{ type: "reference", to: [{ type: "category" }] }],
		}),
		defineField({
			name: "body",
			title: "Body",
			type: "array",
			of: [
				{ type: "block" },
				{
					type: "image",
					options: { hotspot: true },
					fields: [
						{
							name: "alt",
							title: "Alt Text",
							type: "string",
						},
						{
							name: "caption",
							title: "Caption",
							type: "string",
						},
					],
				},
				{
					name: "code",
					title: "Code Block",
					type: "object",
					fields: [
						{
							name: "language",
							title: "Language",
							type: "string",
						},
						{
							name: "code",
							title: "Code",
							type: "text",
						},
					],
				},
			],
		}),
	],
	preview: {
		select: { title: "title", media: "mainImage" },
	},
});
