
exports.up = function(knex, Promise) {
  return knex.schema.createTable('friends', table=>{
    table.increments();
    table.text('friend_name');
    table.text('image_url');
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('friends');
};
