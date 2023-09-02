import { defineConfig } from "vite"
import wasmPack from "vite-plugin-wasm-pack"
import { wasmPackHmr } from "vite-wasm-pack-hmr"

export default defineConfig({
	// @ts-ignore wasmPackHmr arguments are hard to satisfy
	plugins: [wasmPack("./minitrix"), wasmPackHmr()],
})
