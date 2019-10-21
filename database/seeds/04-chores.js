
exports.seed = function (knex) {
  return knex('chores').insert([
    {
      id: 1,
      title: 'Take out the trash',
      description: null,
      childMarkComplete: true,
      parentMarkComplete: false,
      duedate: '2019-09-01',
      child_id: 1,
      user_id: 1
    },
    {
      id: 2,
      title: 'Pick up the poop',
      description: 'Poop from both the front- and back-yards.',
      childMarkComplete: false,
      parentMarkComplete: true,
      duedate: '2019-09-01',
      child_id: 2,
      user_id: 1
    },
    {
      id: 3,
      title: 'Walk the dogs',
      description: null,
      childMarkComplete: false,
      parentMarkComplete: null,
      duedate: '2019-09-01',
      child_id: 3,
      user_id: 1
    },
    {
      id: 4,
      title: 'Put the clean dishes away',
      description: null,
      childMarkComplete: true,
      parentMarkComplete: null,
      duedate: '2019-09-01',
      child_id: 3,
      user_id: 1
    },
  ]);
};
