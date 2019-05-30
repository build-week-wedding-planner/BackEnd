

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {eventname: 'Hawaii Luxury', date: '12/20/2018', description: 'It was like, so totally awesome', location: "Honolulu, Hawaii", theme: 'We Rich B***h', vendors: "Huawei and Intel" },
      ]);
    });
};
