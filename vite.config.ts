import { defineConfig } from "vite"
import wasm from "vite-plugin-wasm"

export default defineConfig({
	// The WASM must be imported as an ES module because the wasm-pack output type is "bundler"
	// Attempts to use vite-plugin-wasm-pack have failed regarding HMR
	plugins: [wasm()],
})
