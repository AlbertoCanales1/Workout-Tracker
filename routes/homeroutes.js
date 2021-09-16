const router = require("express").Router();
const path = require("path")

module.exports = function(router){
  router.get("/exercise", function (req, res){
    res.sendFile(path.join(_dirname, "../public/excercise.html"));
  })

  router.get("/", function (req, res){
    res.sendFile(path.join(_dirname, "../public/index.html"));
  })

  router.get("/stats", function (req, res){
    res.sendFile(path.join(_dirname, "../public/stats.html"));
  })

  // router.get("*", function (req, res){
  //   res.sendFile(path.join)(_dirname,"*")
  // })
}