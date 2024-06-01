window.kindleHighlightsExtensions = {
	convertToJson: () => {
		var highlights = Array.from(document.querySelectorAll("#kp-notebook-annotations>div:not(#empty-annotations-pane)")).map(el => {
			var highlight = {};
			highlight.location = parseInt(el.querySelector("#kp-annotation-location").value);
			highlight.text = el.querySelector("#highlight").innerText;
			highlight.color = Array.from(document.querySelector(".kp-notebook-highlight").classList.values())
				.find(c => c.startsWith('kp-notebook-highlight-'))
				.replace('kp-notebook-highlight-', '');
			
			highlight.note = el.querySelector("#note").textContent;
			
			return highlight;
		});
		
		var dialog = document.createElement("dialog");
		var form = document.createElement("form");
		form.method = "dialog";
		var textarea = document.createElement("textarea");
		textarea.value = JSON.stringify(highlights);
		var button = document.createElement("button");
		button.type = "submit";
		button.innerText = "ok";
		form.appendChild(textarea);
		form.appendChild(button);
		dialog.appendChild(form);
		document.querySelector("body").appendChild(dialog);
		textarea.focus();
		textarea.select();
		textarea.setSelectionRange(0, 99999);
		navigator.clipboard.writeText(textarea.value);
		dialog.showModal();

		button.addEventListener("click", (e) => {
		  navigator.clipboard.writeText(textarea.value);
		});

	}
}
