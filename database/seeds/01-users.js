
exports.seed = function(knex) {
  return knex('users').insert([
    {
      id: 1,
      name: 'testuser',
      email: 'testuser@example.com',
      pictureURL: "https://static.toiimg.com/thumb/msid-69857013,width-640,resizemode-4/69857013.jpg",
      password: '$2a$10$GO/CIkLWX153JsDVw9nom.F41OGx7BGnfXv36Tjzot3zN12QpuPvK'
    },
  ]);
};
