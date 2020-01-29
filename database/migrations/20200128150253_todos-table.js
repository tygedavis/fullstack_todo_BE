
exports.up = function(knex) {
  return knex.schema.createTable('todos', todos => {
    todos.increments();

    todos
      .string('name')

    todos
      .boolean('completed')
        .defaultTo('false')

    todos
      .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('todos')
};
