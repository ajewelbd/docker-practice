const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
const port = process.env.PORT || 5001;

const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    return posts;
}

app.get("/", async (req, res) => {
    const posts = await getPosts();
    res.send(posts)
})

app.listen(port, () => console.log(`Server running on http://localhost:${port}`))