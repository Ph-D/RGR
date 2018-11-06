module.exports = {
    entry: "./js/app.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
   module: {
     rules: [
        {
            test: /\.js$/,
            use: {
                loader: "babel-loader"
            }
        }
    ]
   }
}
