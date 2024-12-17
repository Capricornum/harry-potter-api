import express from "express";
import axios from "axios";

const app = express();
const port = 8080;

const API_URL = "https://api.potterdb.com/v1/"

const mySpells = [];
const myPotions = [];

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
	res.render("index.ejs", { spells: mySpells, potions: myPotions });
});

app.get("/spell", async (req, res) => {
	try {
		const response = await axios.get(API_URL + "spells");
		mySpells.push(response.data.data[mySpells.length]);
		res.render("index.ejs", { spells: mySpells, potions: myPotions })
	} catch (error) {
		res.status(400).send();
	}
});

app.get("/potion", async (req, res) => {
	try {
		const response = await axios.get(API_URL + "potions");
		myPotions.push(response.data.data[myPotions.length]);
		console.log(response.data.data[0]);
		res.render("index.ejs", { spells: mySpells, potions: myPotions })
	} catch (error) {
		res.status(400).send();
	}
});

app.listen(port, () => {
	console.log("Server listening on port", port);
});