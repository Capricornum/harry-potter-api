import express from "express";
import axios from "axios";

const app = express();
const port = 8080;

const API_URL = "https://api.potterdb.com/v1/"

const mySpells = [];

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
	res.render("index.ejs", { spells: mySpells });
});

app.get("/spell", async (req, res) => {
	//get a new spell from the api
	//add it to the existing spells
	//render with existing spells
	try {
		const response = await axios.get(API_URL + "spells");
		console.log(JSON.stringify(response.data.data[17]));
		mySpells.push(response.data.data[mySpells.length]);
		res.render("index.ejs", { spells: mySpells })
	} catch (error) {

	}
});

app.listen(port, () => {
	console.log("Server listening on port", port);
});