const Training = require("../models/workout");
const router = require("express").Router();


  router.get("/api/workouts", function(req, res){
    Training.find().then(data => {
      res.json(data)
    })
  })

  router.get("/api/workouts/range", function(req, res){
    Training.find().then(data => {
      res.json(data)
    })
  })

router.post("/api/workouts", function(req, res){
  Training.create({}).then(data => res.json(data))
})

router.put("/api/workouts/:id", ({body, params}, res) => {
  Training.findByIdAndUpdate(params.id,{$push: {exercises:body} },{new: true, runValidators: true })
  .then(data => res.json(data))
})

module.exports = router;