import express from "express";
import axios from "axios";

const app = express();
const port = 8080;

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
	res.render("index.ejs" );
});

app.listen(port, () => {
	console.log("Server listening on port", port);
});