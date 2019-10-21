exports.up = function(knex) {
  return knex.schema.createTable('chores', table => {
    table.increments();
    table
      .integer('child_id')
      .unsigned()
      .notNullable()
      .references('children.id')
      .onDelete('CASCADE');
    table
      .integer('user_id')
      .unsigned()
      .notNullable()
      .references('users.id')
      .onDelete('CASCADE');
    table.string('title').notNullable();
    table.date('duedate');
    table.boolean('childMarkComplete').defaultTo(false);
    table.boolean('parentMarkComplete').defaultTo(null);
    table.string('description');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('chores');
};
