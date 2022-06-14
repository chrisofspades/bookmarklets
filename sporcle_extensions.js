window.sporcleExtensions = {
	lastNames: [
		"johnson", 
		"jones", 
		"smith", 
		"williams", 
		"jackson", 
		"brown", 
		"green", 
		"white", 
		"davis", 
		"anderson", 
		"young", 
		"lee", 
		"james", 
		"miller",
		"thomas",
		"thompson",
		"harris",
		"lewis",
		"walker",
		"robinson",
		"robertson",
		"richardson",
		"jefferson",
		"morris"
	],
	guessLastNames: () => {
		var input = document.getElementById("gameinput");
		var event = new Event('input', {
			bubbles: true,
			cancelable: true,
		});
		this.sporcleExtensions.lastNames.forEach(name => {
			input.value = name;
			input.dispatchEvent(event);
		});
	}
}
