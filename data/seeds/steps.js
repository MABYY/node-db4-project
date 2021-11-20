exports.seed = function(knex,Promise) {
    // Deletes ALL existing entries
    return knex('steps').truncate()
      .then(function () {
        // Inserts seed entries
        return knex('steps').insert([
            // Spaghetti Bolognese
          {step_instructions: 'Put a large saucepan on a medium heat', step_number: 1,recipe_id:1},
          {step_instructions: 'Add 1 tbsp olive oil', step_number: 2,recipe_id:1},

          //   // Meat balls
          {step_instructions: 'Put a large saucepan on a medium heat', step_number: 1,recipe_id:2},
          {step_instructions: 'Mix eggs and ham', step_number: 2,recipe_id:2}


        ]);
      });
  };


