import mdx from "@mdx-js/rollup";
import rehypePrism from "rehype-prism-plus";
import remarkFrontmatter from "remark-frontmatter";
import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const config = defineConfig({
	plugins: [
		devtools(),
		tsconfigPaths({ projects: ["./tsconfig.json"] }),
		tanstackStart(),
		{
			enforce: "pre",
			...mdx({
				remarkPlugins: [remarkFrontmatter],
				rehypePlugins: [[rehypePrism, { ignoreMissing: true }]],
			}),
		},
		viteReact({ include: /\.(jsx|js|tsx|ts|mdx|md)$/ }),
		tailwindcss(),
	],
});

export default config;
