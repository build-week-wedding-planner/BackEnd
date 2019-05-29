// const knex = require("knex");
// const router = require("express").Router();


// const db = knex(knexConfig);

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


// module.exports = router;

// const eventRouter = require("../config/event-router")
// server.use("/api/event", eventRouter);
//const configureRoutes = require('../config/routes.js');
// const router = require("../config/event-router");
// server.use("/api/events", router);
// const db = require("../database/dbConfig");
// configureRoutes(server);