import { defineConfig } from "vite"
import wasm from "vite-plugin-wasm"

export default defineConfig({
	// vite-plugin-wasm-pack sometimes causes errors like:
	// wasm bindgen LinkError: import object field '__wbindgen_closure_wrapper105695' is not a Function
	// This may be due to the javascript for the WASM file staying in Vite's optimization cache after the file itself has been updated
	// (the WASM delivered to the browser changes, the JS does not).
	// Disabling optimization doesn't seem to help, neither does re-optimization.
	// A workaround for this issue is to trigger a Vite restart (for instance by touching a config file).
	// I worked around the issue by using the output type "bundler" and importing the WASM as an ES Module.
	// This also works with wasmPackHmr. When importing the module directly (import { run } from "../minitrix/pkg/minitrix")
	// Everything works as intended; no extras needed!
	plugins: [wasm()],
})
