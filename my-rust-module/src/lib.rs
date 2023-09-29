use gloo::console::log;
use gloo::dialogs::alert;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn run() {
    log!("run invoked");
}

#[wasm_bindgen]
pub fn wasm_alert() {
    alert("Hello from Rust");
}
