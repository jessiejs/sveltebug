import svelte from "rollup-plugin-svelte";
import { defineConfig } from "rollup";
import nodeResolve from "@rollup/plugin-node-resolve";

export default defineConfig({
	input: "src/main.js",
	output: {
		file: "dist/bundle.js",
	},
	plugins: [
		nodeResolve(),
		svelte(),
	],
})
