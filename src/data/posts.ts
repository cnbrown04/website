/**
 * Blog post metadata. Add new posts here when you add an MDX file under content/blog/.
 * Slug must match the filename (without .mdx).
 * Include optional `updated` (ISO date string) to show "Last updated" on the post.
 */
export interface PostMeta {
	slug: string;
	title: string;
	date: string;
	description: string;
	updated?: string;
}

export const posts: PostMeta[] = [
	{
		slug: "living-homelab",
		title: "Living Homelab Post",
		date: "2025-02-21",
		description:
			"A consistently updated post on what im running, and how im running it.",
		updated: "2025-02-21",
	},
];
