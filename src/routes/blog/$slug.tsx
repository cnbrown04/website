import { createFileRoute, Link, notFound, useParams } from "@tanstack/react-router";
import { MDXProvider } from "@mdx-js/react";
import type { ComponentType } from "react";
import { useEffect, useState } from "react";
import { Signature } from "@/components/signature";
import { posts } from "@/data/posts";

// Lazy-load MDX by slug. Keys are normalized by Vite (forward slashes).
const postModules = import.meta.glob<{
	default: ComponentType;
}>("../../../content/blog/*.mdx");

export const Route = createFileRoute("/blog/$slug")({
	component: BlogPost,
	loader: async ({ params }) => {
		const meta = posts.find((p) => p.slug === params.slug);
		if (!meta) throw notFound();
		return { meta };
	},
});

function BlogPost() {
	const { meta } = Route.useLoaderData();
	const { slug } = useParams({ from: "/blog/$slug" });
	const [Component, setComponent] = useState<ComponentType | null>(null);

	useEffect(() => {
		const pathKey = `../../../content/blog/${slug}.mdx`;
		const loader = postModules[pathKey];
		if (loader) loader().then((mod) => setComponent(() => mod.default));
	}, [slug]);

	return (
		<div className="min-h-screen bg-stone-50">
			<header className="flex justify-center pt-8">
				<div className="w-full min-w-[160px] max-w-md">
					<Signature />
				</div>
			</header>

			<main className="mx-auto max-w-4xl px-6 pb-16 pt-2.5">
				<nav className="mb-8">
					<Link
						to="/blog"
						className="text-muted-foreground text-sm hover:underline"
					>
						← Blog
					</Link>
				</nav>

				<article className="text-foreground">
					<header className="mb-6">
						<h1 className="text-foreground mb-0.5 text-2xl font-semibold">
							{meta.title}
						</h1>
						{meta.description && (
							<p className="text-muted-foreground mt-0.5 text-sm">
								{meta.description}
							</p>
						)}
						<div className="text-muted-foreground mt-0.5 text-sm">
							<time dateTime={meta.date}>
								{formatDate(meta.date)}
							</time>
							{meta.updated && (
								<>
									<span className="mx-1.5">·</span>
									<time dateTime={meta.updated}>
										Last updated {formatDate(meta.updated)}
									</time>
								</>
							)}
						</div>
					</header>

					<hr className="border-border my-6" />

					<div className="blog-content [&_h1]:mb-4 [&_h1]:text-2xl [&_h2]:mb-3 [&_h2]:text-xl [&_p]:mb-4 [&_ul]:list-inside [&_ul]:list-disc [&_ul]:mb-4 [&_:not(pre)_>_code]:rounded [&_:not(pre)_>_code]:bg-muted [&_:not(pre)_>_code]:px-1.5 [&_:not(pre)_>_code]:py-0.5 [&_:not(pre)_>_code]:text-sm [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:border [&_pre]:border-border [&_pre]:bg-[#2d2d2d] [&_pre]:p-4 [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:text-sm">
						<MDXProvider>
							{Component ? <Component /> : null}
						</MDXProvider>
					</div>
				</article>
			</main>
		</div>
	);
}

function formatDate(dateStr: string) {
	const d = new Date(dateStr);
	return d.toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
}
