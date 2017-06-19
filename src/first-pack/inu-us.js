const instaUser = require('instagram-user');
instaUser('annashafran').then(user => {
  console.log(user);
}).catch(err => {
  console.log('er', err);
});
