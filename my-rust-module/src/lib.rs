use gloo::dialogs::alert;
use gloo_console::log;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn hello_console() {
    // See https://docs.rs/gloo-console/latest/gloo_console/
    // let object = JsValue::from("any JsValue can be logged");

    log!("Hello from Rust! You can find this code in my-rust-module/src/lib.rs. ")
}

#[wasm_bindgen]
pub fn hello_alert() {
    alert("Hello from Rust! You can find this code in my-rust-module/src/lib.rs. ");
}
