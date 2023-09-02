import { defineConfig } from "vite"
import wasmPack from "vite-plugin-wasm-pack"
import { wasmPackHmr } from "vite-wasm-pack-hmr"

export default defineConfig({
	// @ts-ignore wasmPackHmr arguments are hard to satisfy
	plugins: [wasmPack("./minitrix"), wasmPackHmr()],

	// We sometimes get errors like:
	// wasm bindgen LinkError: import object field '__wbindgen_closure_wrapper105695' is not a Function
	// This may be due to the javascript for the WASM file staying in Vite's optimization cache after the file itself has been updated
	// (the WASM delivered to the browser changes, the JS does not).
	// Disabling optimization doesn't seem to help, neither does re-optimization.
	// A workaround for this issue is to trigger a Vite restart (for instance by touching a config file).
	// Maybe choosing the output type to "bundler" rather than web would help.
})
