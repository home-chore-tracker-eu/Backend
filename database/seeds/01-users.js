const bcrypt = require("bcryptjs");

exports.seed = function(knex) {
  return knex('users').insert([
    {
      id: 1,
      name: 'testuser',
      email: 'testuser@example.com',
      pictureURL: "https://static.toiimg.com/thumb/msid-69857013,width-640,resizemode-4/69857013.jpg",
      password: bcrypt.hashSync("testuser", 10)
    },
  ]);
};
