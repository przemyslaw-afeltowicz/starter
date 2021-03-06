const path = require('path');

module.exports = {
    entry: "./app/js/main.js",
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/app/",
        filename: "bundle.js"
    }
};
