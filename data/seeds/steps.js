exports.seed = function(knex,Promise) {
    // Deletes ALL existing entries
    return knex('steps').truncate()
      .then(function () {
        // Inserts seed entries
        return knex('steps').insert([
          {step_instructions: 'Put a large saucepan on a medium heat', ingredient_id: ""},
          {step_instructions: 'Add 1 tbsp olive oil', ingredient_id: "olive oil"},
          {step_instructions: 'Put a large saucepan on a medium heat', ingredient_id: ""},
          {step_instructions: 'Mix eggs and ham', ingredient_id: "Mixer"},

        ]);
      });
  };
  