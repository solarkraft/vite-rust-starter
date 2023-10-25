import "./style.css"

// Usually you would directly import functions like import { hello_console } from ...
// In this case we are doing a little trick to import into the global scope so that
// all Rust functions are immediately available in the browser console and the IDE.
// We don't need to initialize the module because it's imported as an ES module.
// Browsers can't directly handle this yet, but vite-plugin-wasm transforms it for us.

import * as rustModule from "../my-rust-module/pkg/my_rust_module"
Object.assign(globalThis, rustModule)

rustModule.hello_console()

import { appendButton } from "./util"

appendButton("Test Rust", rustModule.hello_alert)
