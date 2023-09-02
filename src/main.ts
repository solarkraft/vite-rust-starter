import init, { run } from "minitrix"

init().then(() => {
	console.log("init wasm-pack")
	run()
})
