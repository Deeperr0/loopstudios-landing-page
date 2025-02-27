const creationsList = document.querySelector(".creations__list");
const screenWidth = window.innerWidth;
const mobileMenu = document.querySelector(".mobile__menu")
try {
	fetch("cards.json")
		.then((response) => {
			return response.json();
		})
		.then((json) => {
			json.map((card) => {
				creationsList.innerHTML += `
                <div style="background-image: url(${
									screenWidth <= 480 ? card.image.mobile : card.image.desktop
								})" class="creations__list__item">
                <p class="creations__list__item__name">${card.name.toUpperCase()}</p>
                </div>`;
			});
		});
	function handleMenu(){
		mobileMenu.classList.remove("hidden");
	}
	function closeMenu(){
		mobileMenu.classList.add("hidden");
	}
} catch (error) {
	console.log("Error: ", error);
}
