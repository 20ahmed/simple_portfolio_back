const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const homeRouter = require("./routers/homeRouter");
const aboutRouter = require("./routers/aboutRouter");
const worksRouter = require("./routers/worksRouter");
const contactRouter = require("./routers/contactRouter");

app.use("/home", homeRouter);
app.use("/about", aboutRouter);
app.use("/works", worksRouter);
app.use("/contacts", contactRouter);

module.exports = app;
