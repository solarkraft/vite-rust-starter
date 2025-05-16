use gloo::dialogs::alert;
use gloo_console::log;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn hello_console() {
    log!("Hello from Rust!");
}

#[wasm_bindgen]
pub fn hello_alert() {
    alert("Hello from Rust!");
}
