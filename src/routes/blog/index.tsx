import { createFileRoute, Link } from "@tanstack/react-router";
import { Signature } from "@/components/signature";
import { posts } from "@/data/posts";

export const Route = createFileRoute("/blog/")({
	component: BlogIndex,
});

function BlogIndex() {
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
						to="/"
						className="text-muted-foreground text-sm hover:underline"
					>
						← Home
					</Link>
				</nav>

				<h1 className="text-foreground mb-8 text-2xl font-semibold">
					Blog
				</h1>

				<ul className="flex flex-col gap-6">
					{posts.map((post) => (
						<li key={post.slug}>
							<Link
								to="/blog/$slug"
								params={{ slug: post.slug }}
								className="group block rounded-lg border border-border bg-background px-4 py-3 transition-colors hover:bg-muted/50"
							>
								<span className="font-medium text-foreground group-hover:underline">
									{post.title}
								</span>
								<p className="text-muted-foreground mt-1 text-sm">
									{post.description}
								</p>
								<div className="text-muted-foreground mt-1 text-xs">
									<time dateTime={post.date}>
										{formatDate(post.date)}
									</time>
									{post.updated && (
										<>
											<span className="mx-1.5">·</span>
											<time dateTime={post.updated}>
												Last updated {formatDate(post.updated)}
											</time>
										</>
									)}
								</div>
							</Link>
						</li>
					))}
				</ul>
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
