// var _ = require('lodash');
import _ from 'lodash';

const data = [
  {
    name: 'Antonio',
    role: 'Admin',
  },
  {
    username: 'Liyi',
    role: 'User',
  }
];

const rta = _.groupBy(data, (item) => item.role);

console.log(rta);
