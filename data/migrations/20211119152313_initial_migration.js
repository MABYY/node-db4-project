
exports.up = function(knex) {
  
    return knex.schema

    .createTable('recipes', tbl => {
        tbl.increments("recipe_id")
        tbl.string("recipe_name",256).unique().notNullable()
    })
    .createTable('ingredients', tbl => {
        tbl.increments("ingredient_id")
        tbl.string("ingredient_name",256).unique().notNullable()
        tbl.string("ingredient_unit",50)
    })

    .createTable('steps', tbl => {
        tbl.increments("step_id")
        tbl.text("step_instructions",256).notNullable()
        tbl.integer('step_number').notNullable()
        tbl.integer('recipe_id')
            .unsigned()   // not negative
            .notNullable() // Maybe the step does not require an ingredient
            .references('recipe_id')
            .inTable('recipes')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT') // Changes of promary keys rarely happens
    })

    .createTable('step_ingred', tbl => {
        tbl.increments("step_ingred_id")
        tbl.float("quantity").notNullable()
        tbl.integer('step_id')
            .unsigned()   
            .notNullable() 
            .references('step_id')
            .inTable('steps')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT') 
        tbl.integer('ingredient_id')
            .unsigned()   
            .notNullable() 
            .references('ingredient_id')
            .inTable('ingredients')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT') 
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('step_ingred')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')

  
};


// https://www.youtube.com/watch?v=zdH2xCxXup8