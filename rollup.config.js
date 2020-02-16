import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

const production = true;

export default ["NavBar", "AboutMe", "Credits", "Section", "InfoCard", "Skills", "Experience", "Education", "Showcase"]
	.map((componentName) => ({
		input: `apps/${componentName}/App.svelte`,
		output: {
			sourcemap: true,
			format: 'iife',
			name: componentName,
			file: `public/app/${componentName}.js`
		},
		plugins: [
			svelte({
				dev: production,
			}),
			resolve({
				browser: true,
				dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/')
			}),
			commonjs(),
			production && terser()
		],
		watch: {
			clearScreen: false
		}
	}));
