import { defineConfig } from "vite"
import wasm from "vite-plugin-wasm"
import topLevelAwait from "vite-plugin-top-level-await"

export default defineConfig({
	// The WASM must be imported as an ES module because the wasm-pack output type is "bundler"
	// Attempts to use vite-plugin-wasm-pack have failed regarding HMR
	// vite-plugin-top-level-await is needed because vite-plugin-wasm uses top level awaits, which aren't widely supported yet
	plugins: [wasm(), topLevelAwait()],
})
