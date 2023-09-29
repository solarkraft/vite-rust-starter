use gloo::console::log;
use gloo::dialogs::alert;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn hello_console() {
    log!("Hello from Rust!");
}

#[wasm_bindgen]
pub fn hello_alert() {
    alert("Hello from Rust!");
}
