window.listChallengesExtensions = {
	addLinkToItem: () => {
		jQuery("[data-item-id]").each((index, item) => jQuery(item).append(jQuery("<a target=_blank>")
		   .text(jQuery(item).data("item-id"))
		   .attr("href", `https://www.listchallenges.com/lists/containing-item/${jQuery(item).data("item-id")}`)));
	},
	clickFavorited() {
		document.querySelectorAll(".item-favorite[data-item-id]:not(.checked)")
			.forEach(el => el.querySelector(".item-click-area").click());
	},
	addClickedToFavorites() {
		document.querySelectorAll(".item.checked[data-item-id]:not(.item-favorite)")
			.forEach(el => el.querySelector(".item-button-favorite").click());
	}
}
