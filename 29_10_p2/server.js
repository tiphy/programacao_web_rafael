const express = require("express");

const app = express();

const produtos =[
    {RM: 158575, nome: "Tiphany Souza", idade: 18}

];

app.get("/usuario", (req, res) => {
    res.json(produtos);
});

app.listen(3000);