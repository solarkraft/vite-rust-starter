import "./style.css"

// We don't need to initialize the module because it's loaded as an ES module.
// Browsers can't directly handle this yet, but vite-plugin-wasm can do the transformation for us.
import { run, wasm_alert } from "../my-rust-module/pkg/my_rust_module"
run()
wasm_alert()
