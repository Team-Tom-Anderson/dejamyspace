
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('friends').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('friends').insert({id: 1, friend_name: 'Tom Cruise', image_url: 'http://www.dailycelebrations.com/tomcruise.jpg'}),
        knex('friends').insert({id: 2, friend_name: 'Britney Spears', image_url: 'http://media.vanityfair.com/photos/57c04f40daec5e0d4f5d7cf7/master/pass/t-britney-spears-2001-vma-snake.jpg'}),
        knex('friends').insert({id: 3, friend_name: 'Bruce Willis', image_url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQzMjA2Mjc1Nl5BMl5BanBnXkFtZTYwNzI0MDc3._V1_SX640_SY720_.jpg'}),
        knex('friends').insert({id: 4, friend_name: 'Rihanna', image_url: 'http://www2.pictures.zimbio.com/bg/19th+Annual+Kids+Choice+Awards+2go_RYKF1imm.jpg'}),
        knex('friends').insert({id: 5, friend_name: 'Julia Roberts', image_url: 'http://cineplex.media.baselineresearch.com/images/84715/84715_full.jpg'}),
        knex('friends').insert({id: 6, friend_name: 'George Bush', image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/George-W-Bush.jpeg'}),
        knex('friends').insert({id: 7, friend_name: 'Eddie Murphy', image_url: 'http://i.forbesimg.com/images/2001/01/05/movers2_250x255.jpg'}),
        knex('friends').insert({id: 8, friend_name: 'Justin Timberlake', image_url: 'http://s27.photobucket.com/user/sophiabushfan_/media/BJ-11_zpse5d7e57b.png.html'})
      ]);
    });
};
