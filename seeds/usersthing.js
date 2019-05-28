
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'Amber', password: 'password'},
        {id: 2, username: 'Samuel', password: 'password'},
        {id: 3, username: 'Steven', password: 'password'},
        {id: 4, username: 'Danika', password: 'password'},
      ]);
    });
};
