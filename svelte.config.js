import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
export default {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false
		}),
		prerender: {
			default: true
		},
		vite: {
			server: {
				cors: false
			}
		},
		endpointExtensions: ['.js', '.ts'],
		files: {
			assets: 'static',
			hooks: 'src/hooks',
			lib: 'src/lib',
			params: 'src/params',
			routes: 'src/routes',
			serviceWorker: 'src/service-worker',
			template: 'src/app.html'
		}
	},
	preprocess: preprocess({
		babel: {
			presets: [
				[
					'@babel/preset-env',
					{
						loose: true,
						modules: false,
						targets: {
							esmodules: true
						}
					}
				]
			]
		},
		sass: {
			prependData: `@import 'src/styles/vars.sass'`,
			outputStyle: 'compressed'
		}
	})
};
