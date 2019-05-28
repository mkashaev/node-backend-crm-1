module.exports.overview = function(req, res) {
    res.status(200).json({
        result: "overview"
    })
}

module.exports.anaylytics = function(req, res) {
    res.status(200).json({
        result: "analytics"
    })
    
}