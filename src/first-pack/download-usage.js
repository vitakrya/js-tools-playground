const fs = require('fs');
const download = require('download');

// download('https://www.askideas.com/media/49/Funny-Avatar-Mr-Bean-Smiling-Photoshop-Image.jpg', 'dist').then(() => {
//   console.log('Success!');
// });

download('https://en.bem.info/methodology/', 'dist').then((data) => {
  fs.writeFileSync('dist/meth.html', data);
  console.log('done');
});
