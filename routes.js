const controller = require("./controller");
const path = require("path");
module.exports = app => {
    app.get("/api/allAuthors", controller.allAuthors);
    app.post("/api/newAuthor", controller.newAuthor);
    app.put("/api/upVote/:id", controller.addVote);
    app.put("/api/downVote/:id", controller.downVote);
    app.put("/api/addQuote/:id", controller.addQuote);
    app.get("/api/:id", controller.getQuote);
    app.delete("/api/:id", controller.deleteQuote);
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}