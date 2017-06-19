const execa = require('execa');
const SilentRenderer = require('listr-silent-renderer');
const VerboseRenderer = require('listr-verbose-renderer');
const Listr = require('listr');

const tasks = new Listr([
  {
    title: 'Task 1',
    task: () => {
      return execa.stdout('npm', ['version']).then(result => {
        const versionRegexp = /node:\s+'(\d+\.\d+\.\d+)/g;
        const versionMatch = versionRegexp.exec(result);
        if (versionMatch) {
          if (versionMatch[0].indexOf('8') === -1) {
            throw new Error('Please install docker with version more than 5');
          }
        }
        else {
          throw new Error('Please install docker');
        }
      });
    }
  },
  {
    title: 'Task 2',
    task: () => {
      setTimeout(() => {
        console.log('All or');
      }, 500);
    }
  },
  {
    title: 'Gern 2',
    task: () => {
      return new Listr([
        {
          title: 'Li 1',
          task: () => Promise.resolve('Yest got it!')
        },
        {
          title: 'multi par',
          task: () => {
            return new Listr([
              {
                title: 'Meg 1',
                task: () => Promise.resolve(new Error("Piq"))
              },
              {
                title: 'Liq op',
                task: () => Promise.resolve('Slon 23')
              }
            ]);
          }
        },
        {
          title: 'Get imas',
          task: () => Promise.reject(new Error('Losp error'))
        }
      ]);
    }
  },
  {
    title: 'Gern 3',
    task: () => {
      return new Listr([
        {
          title: 'Li 4',
          task: () => Promise.resolve('Yest got it!')
        },
        {
          title: 'Get imas',
          task: () => Promise.resolve(new Error('Losp error'))
        }
      ]);
    }
  },
  {
    title: 'Task 3',
    task: () => execa('npm', ['ls'])
  }
], {
  concurrent: true,
  renderer: VerboseRenderer
  // collapse: !true
});

tasks.run().catch(err => {
  console.log('This is err', err);
});
