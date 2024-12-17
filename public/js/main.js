const houses = ["gryffindor", "hufflepuff", "ravenclaw", "slytherin", "none"];
let myHouseIndex = 4;

const houseStyleContainer = document.querySelector(".container-house-styles");
const houseBtn = document.querySelector("#house-selector");
const houseTitle = document.querySelector("#house-title");

houseBtn.addEventListener("click", handleSelectHouse);

function handleSelectHouse() {
	selectHouse();
	styleAccordingToHouse();
}

function selectHouse() {
	const randomIndex = Math.floor(Math.random() * 4);
	myHouseIndex = randomIndex;
	return houses[myHouseIndex];
}

function styleAccordingToHouse() {
	const myHouse = houses[myHouseIndex];
	houseStyleContainer.classList.forEach((cls) => { 
		if (cls.startsWith("house")) {
			houseStyleContainer.classList.remove(cls);
		}
	});
	houseStyleContainer.classList.add(`house-${myHouse}`);
	let titleText = "";
	if (myHouse === "none") {
		titleText = "The sorting hat will decide your house"
	} else {
		titleText = `Your house is ${myHouse.toUpperCase()}`;
	}
	houseTitle.textContent = titleText;
}