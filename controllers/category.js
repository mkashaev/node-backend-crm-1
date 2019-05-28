module.exports.getAll = function(req, res) {
  res.status(200).json({
    result: "getAll"
  })
}

module.exports.getById = function(req, res) {
  res.status(200).json({
    result: "getById"
  })   
}

module.exports.remove = function(req, res) {
  res.status(200).json({
    result: "remove"
  })
}

module.exports.create = function(req, res) {
  res.status(200).json({
    result: "create"
  })
}

module.exports.update = function(req, res) {
  res.status(200).json({
    result: "update"
  })    
}