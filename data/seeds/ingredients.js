
exports.seed = function(knex,Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'olive oil',ingredient_unit:'oz'},
        {ingredient_name: 'eggs',ingredient_unit:'unit'},
        {ingredient_name: 'cheese',ingredient_unit:'pound'},
      ]);
    });
};


// <p><a href="https://lambdaschool.instructure.com/courses/1772/modules/items/623900?wvideo=hlle9o4z0x"><img src="https://embedwistia-a.akamaihd.net/deliveries/13192aeb6e7aaafab25390636e15559e.jpg?image_play_button_size=2x&amp;image_crop_resized=960x540&amp;image_play_button=1&amp;image_play_button_color=2d539de0" width="400" height="225" style="width: 400px; height: 225px;"></a></p><p><a href="https://lambdaschool.instructure.com/courses/1772/modules/items/623900?wvideo=hlle9o4z0x">Data Modeling - BloomTech</a></p>