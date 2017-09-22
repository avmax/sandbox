let webpack = require("webpack");
let path = require("path");

module.exports = {
    context: __dirname,
    entry: "./src/app.js",
    output: {
        path: path.join(__dirname, "public"),
        filename: "app.js", // no hash in main.js because index.html is a static page
    }
};