import "./style.css"

// Usually you would directly import functions like import { hello_console } from ...
// In this case we are doing a little trick to import into the global scope so that
// all Rust functions are immediately available in the browser console and the IDE.
// We don't need to initialize the module because it's imported as an ES module.
// Browsers can't directly handle this yet, but vite-plugin-wasm transforms it for us.

// We add the entire rust module to the global scope for convenient introspection
import * as RustModule from "../my-rust-module/pkg/my_rust_module"
declare global {
	interface Window {
		RustModule: typeof RustModule
	}
}
window.RustModule = RustModule

// ... but we can import Rust functions just like JS ones

import { hello_console, hello_alert } from "../my-rust-module/pkg/my_rust_module"

// Greet curious developer right away
hello_console()

import { appendButton } from "./util"
appendButton("RustModule.hello_alert()", hello_alert)
