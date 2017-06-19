const merge = require('human-config-merge');
const template = `
{
  // Target browsers
  "browsers": ["IE", "Firefox", "Chrome"],

  "target-date": "2 weeks ago",

  "target-years": [16, 19, 25],
  "poll": null,
  "settings": {
    "bgColor": ["cyan", "vertex", "lem"],
    "fgColor": "rgba(100, 90, 18, 0.8)"
  }
}
`;

const config = `
{
  // Targe bro
  "browsers": ["Chrome"],

  "poll": false
  "target-years": [10, 12],
  "settings": {
    "bgColor": ["red", "ops"],
    "fontSize": 90
  },
  "public": false
}
`;
// console.log(config);
console.log(merge(template, config));
