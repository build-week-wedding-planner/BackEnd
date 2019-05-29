
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'Amber', password: 'password'},
        {username: 'Samuel', password: 'password'},
        {username: 'Steven', password: 'password'},
        {username: 'Danika', password: 'password'},
      ]);
    });
};
