import {runGenerator} from 'reazy-setup-helper';
import path from 'path';

const add = (cb) => {
  runGenerator(path.join(__dirname, 'generators', 'add'), 'reazy-web-config-add', cb);
};

const remove = (cb) => {
  runGenerator(path.join(__dirname, 'generators', 'remove'), 'reazy-web-config-remove', cb);
};

export { add, remove }
