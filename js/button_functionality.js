/*** Context view functionality ***/

// All expandable context spans are stored in a map for quick lookup.
const contextSpanMap = new Map();
// Define constants
const contextClassActive = "context-active";

function makeCollapseableButtonCallback(button) {
	button.dataset.active = false;
	button.classList.remove(contextClassActive);
	let span = contextSpanMap.get(button.dataset.contextId);
	if (span != null) {
		span.classList.remove(contextClassActive);

		return function () {
			if (button.dataset.active === "false") {
				button.classList.add(contextClassActive);
				span.classList.add(contextClassActive);
				button.dataset.active = "true";
			}
			else {
				button.classList.remove(contextClassActive);
				span.classList.remove(contextClassActive);
				button.dataset.active = "false";
			}
		}
	}
	else return function () { console.error("Context button with ID " + button.dataset.contextId + " had no matching context spans"); }
};

for (var span of document.querySelectorAll(".context-span")) {
	contextSpanMap.set(span.dataset.contextId, span);
}

for (var button of document.querySelectorAll(".context-button")) {
	button.onclick = makeCollapseableButtonCallback(button);
}