const Conf = require('conf');
const config = new Conf({
  defaults: {
    name: 'Peter'
  }
});

config.set('fin.len.bti.ops.qer', '-+-');
config.set('fin.len.bro.pin', '(+)')
config.set('finp.es', '/*\\');
config.set('finp.ros', '189');
// config.delete('fin.len.bro');
console.log(config.get('fin.len'));

for (let item of config) {
  console.log('it ', item);
}
console.log(config.has('fin'));
console.log(config.get('finp.ros'));
console.log(config.get('finp.rus', 91));
console.log(config.get('fin.len.bro'));
console.log(config.size);
console.log(config.get('name'));
config.clear();
console.log(config.size);
