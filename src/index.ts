import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get("/api/:n", (req, res) => {
    const n = parseInt(req.params.n);
    res.send({ result: n * n });
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})