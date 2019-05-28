const db = require('../dbConfig.js');
const mappers = require('./mappers');

module.exports = {
  get: function(id) {
    let query = db('events');

    if (id) {
      return query
        .where('id', id)
        .first()
        .then(event => mappers.eventToBody(event));
    }

    return query.then(events => {
      return events.map(event => mappers.eventToBody(event));
    });
  },
  insert: function(event) {
    return db('events')
      .insert(event)
      .then(([id]) => this.get(id));
  },
  update: function(id, changes) {
    return db('events')
      .where('id', id)
      .update(changes)
      .then(count => (count > 0 ? this.get(id) : null));
  },
  remove: function(id) {
    return db('events')
      .where('id', id)
      .del();
  },
};
