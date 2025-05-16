# Vite Rust Starter

This template is meant to be a scaffold for conveniently building web apps with Rust elements.

## Features

-   Web tooling first: You're not locked into rust specific tooling but primarily use pnpm and Vite
-   Auto reloading on both Rust and JavaScript changes
-   Integrated logs and lifecycles for both systems
-   Easily find + replace-able module name

## Technical details

The rust module is exposed to the global namespace under the `RustModule` object.
You can explore its functions by pressing `.` after its name in the browser console.

Try calling `RustModule.hello_alert()`:
You just called a Rust function from JavaScript and that Rust function called a browser function as imported from `gloo::dialogs`!

## Developing

### Prerequisites

-   Node.js & pnpm (`npm install --global pnpm`)
-   Rust/Cargo

Install dependencies with `pnpm install`. Run with `pnpm dev`.

## Tips / Guides

### Renaming the Rust module

Integrating a Rust module requires hard coding its name in various places.

The name `my-rust-module` was deliberately chosen to make changing it easy: Just do a find + replace.

## Ingredients

This template mainly combines the following components:

-   [wasm-pack](https://github.com/rustwasm/wasm-pack): Building WebAssembly packages from the compiled wasm files
-   [wasm-bindgen](https://rustwasm.github.io/docs/wasm-bindgen/): Automatic binding creation for Rust functions and types
-   [vite-plugin-wasm](https://github.com/Menci/vite-plugin-wasm): Nice integration into Vite (loading as ES module, auto reloading)
