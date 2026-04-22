import { defineField, defineType } from "sanity";

export const project = defineType({
	name: "project",
	title: "Project",
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
			name: "description",
			title: "Short Description",
			type: "text",
			rows: 3,
		}),
		defineField({
			name: "mainImage",
			title: "Cover Image",
			type: "image",
			options: { hotspot: true },
		}),
		defineField({
			name: "projectUrl",
			title: "Live URL",
			type: "url",
		}),
		defineField({
			name: "repoUrl",
			title: "Repository URL",
			type: "url",
		}),
		defineField({
			name: "tags",
			title: "Tags",
			type: "array",
			of: [{ type: "string" }],
			options: { layout: "tags" },
		}),
		defineField({
			name: "ytLink",
			title: "YouTube Embed URL",
			type: "url",
		}),
		defineField({
			name: "links",
			title: "Links",
			type: "array",
			of: [
				{
					type: "object",
					fields: [
						{ name: "label", title: "Label", type: "string" },
						{ name: "url", title: "URL", type: "url" },
					],
					preview: {
						select: { title: "label", subtitle: "url" },
					},
				},
			],
		}),
		defineField({
			name: "order",
			title: "Display Order",
			type: "number",
			initialValue: 0,
		}),
		defineField({
			name: "body",
			title: "Detailed Description",
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
					],
				},
			],
		}),
	],
	preview: {
		select: { title: "title", media: "mainImage" },
	},
});
