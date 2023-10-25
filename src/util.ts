export function appendButton(buttonText: string, callbackFunction: () => any) {
	let main = document.querySelector("main")!

	let testButton = document.createElement("button")
	testButton.innerText = buttonText
	testButton.addEventListener("click", callbackFunction)

	main.appendChild(testButton)
}
