const express = require("express");
const db = require("./eventModel");

const eventRouter = express.Router();

eventRouter.get("/", (req, res) => {
  db.get()
    .then(events => {
      res.status(201).json(events);
    })
    .catch(err => {
      res.status(500).json({ error: "The events could not be retrieved." });
    });
});

eventRouter.get("/:id", (req, res) => {
  eventId = req.params.id;
  db.get(eventId)
    .then(event => {
      if (event) {
        res.status(200).json(event);
      } else {
        res
          .status(404)
          .json({ error: "The event with the specified ID does not exist." });
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "The event information could not be retrieved." });
    });
});

eventRouter.post("/:id", (req, res) => {
  const newevent = req.body;

  if (newEvent.description && newEvent.notes && newEvent.project_id) {
    db.insert(newEvent)
      .then(event => {
        res.status(201).json(event);
      })
      .catch(err => {
        res.status(400).json({
          errorMessage: "Please provide title and contents for the event."
        });
      });
  } else {
    res.status(500).json({
      error: "There was an error while saving the event to the database"
    });
  }
});

eventRouter.delete("/:id", (req, res) => {
  const eventId = req.params.id;
  db.remove(eventId)
    .then(deleted => {
      if (deleted) {
        res.status(200).json(deleted);
      } else {
        res
          .status(404)
          .json({ error: "The event with the specified ID does not exist." });
      }
    })
    .catch(err => {
      res.status(500).json({
        error: err,
        message: "The event could not be removed"
      });
    });
});

eventRouter.put("/:id", (req, res) => {
  const eventId = req.params.id;
  const updateInfo = req.body;

  console.log(updateInfo);
  if (updateInfo.notes && updateInfo.description) {
    db.update(eventId, updateInfo)
      .then(event => {
        res.status(200).json(event);
      })
      .catch(err => {
        res.status(500).json({
          error: err,
          message: "The event information could not be modified."
        });
      });
  } else {
    res
      .status(400)
      .json({ message: "Please provide  and contents for the event." });
  }
});

module.exports = eventRouter;