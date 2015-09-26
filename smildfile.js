module.exports = {
    module: false,
    postBuild: [
        {
            "source": "./public/*",
            "dest": ""
        }
    ]
};