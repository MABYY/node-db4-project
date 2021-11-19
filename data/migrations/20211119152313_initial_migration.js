
exports.up = function(knex) {
  
    return knex.schema.createTable('ingredients', tbl => {
        tbl.increments("ingredient_id")
        tbl.text("ingredient_name",256).unique().notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('ingredients')
  
};
