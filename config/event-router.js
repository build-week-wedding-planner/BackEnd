// const knex = require("knex");
// const router = require("express").Router();


// const db = knex(knexConfig);
// update: function(id, changes) {
//     return db('actions')
//       .where('id', id)
//       .update(changes)
//       .then(count => (count > 0 ? this.get(id) : null));
//   },
//   remove: function(id) {
//     return db('actions')
//       .where('id', id)
//       .del();
//   },
// router.get("/", (req, res) => {
//   db("event")
//     .then(event => {
//       res.status(200).json(event);
//     })
//     .catch(err => {
//       res.status(500).json({ error: "The event could not be retrieved." });
//     });
// });

// router.post("/", (req, res) => {
//   db("event")
//     .insert(req.body, "id")
//     .then(ids => {
//         console.log(ids)
//       db("event")
//         .where({ id: ids[0] })
//         .first()
//         .then(role => {
//           res.status(201).json(role);
//         })
//         .catch(err => {
//           res.status(500).json(err.message);
//         });
//     })
//     .catch(err => {
//       res.status(500).json({err: err.message});
//     });
// });
// router.delete("/:id", (req, res) => {
//   const actionId = req.params.id;
//   db.remove(eventId)
//     .then(deleted => {
//       if (deleted) {
//         res.status(200).json(deleted);
//       } else {
//         res
//           .status(404)
//           .json({ error: "The event with the specified ID does not exist." });
//       }
//     })
//     .catch(err => {
//       res.status(500).json({
//         error: err,
//         message: "The event could not be removed"
//       });
//     });
// });

// router.put("/:id", (req, res) => {
//   const eventId = req.params.id;
//   const updateInfo = req.body;

//   console.log(updateInfo);
//   if (updateInfo.notes && updateInfo.description) {
//     db.update(eventId, updateInfo)
//       .then(event => {
//         res.status(200).json(event);
//       })
//       .catch(err => {
//         res.status(500).json({
//           error: err,
//           message: "The event information could not be modified."
//         });
//       });
//   } else {
//     res
//       .status(400)
//       .json({ message: "Please provide  and contents for the event." });
//   }
// });

// module.exports = router;

// const eventRouter = require("../config/event-router")
// server.use("/api/event", eventRouter);
//const configureRoutes = require('../config/routes.js');
// const router = require("../config/event-router");
// server.use("/api/events", router);
// const db = require("../database/dbConfig");
// configureRoutes(server);