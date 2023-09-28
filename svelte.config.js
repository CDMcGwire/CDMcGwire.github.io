import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'
import { mdsvex } from 'mdsvex'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeAddClasses from 'rehype-add-classes'

/** @type {import("@sveltejs/kit").Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [
		preprocess({
			sourceMap: true,
			babel: {
				presets: [
					[
						'@babel/preset-env',
						{
							loose: true,
							modules: false,
							targets: {
								esmodules: true,
							},
						},
					],
				],
			},
			sass: {
				prependData: `@import 'src/styles/vars.sass'`,
				outputStyle: 'compressed',
			},
		}),
		mdsvex({
			extensions: ['.md'],
			rehypePlugins: [
				[
					rehypeAddClasses,
					{
						'h1,h2,h3,pre,blockquote,p,ul,li,ol,strong,em,hr': 'markdown',
					},
				],
				rehypeSlug,
				[
					rehypeAutolinkHeadings,
					{
						behavior: 'append',
						properties: {
							ariaHidden: true,
							tabIndex: -1,
							class: 'heading-anchor',
						},
					},
				],
			],
		}),
	],
	kit: {
		adapter: adapter(),
		appDir: 'internal',
	},
}

export default config
