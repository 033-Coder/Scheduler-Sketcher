module.exports = app => {
    var router = require("express").Router();

    const appointment = require("../controllers/appointment.controller.js");
  
    router.post("/", appointment.create);

    router.get("/", appointment.findAll);

    router.get("/published", appointment.findAllPublished);
  
    router.get("/:id", appointment.findOne);
  
    router.put("/:id", appointment.update);

    router.delete("/:id", appointment.delete);
  
    router.delete("/", appointment.deleteAll);
  
    app.use("/api/appointments", router);
  };