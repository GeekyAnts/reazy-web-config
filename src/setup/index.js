import {runGenerator} from 'reazy-setup-helper';
import path from 'path';

export default {
  add: () => {
    runGenerator(path.join(__dirname, '..', 'generators', 'add'), 'reazy-web-config-add');
  },
  remove: () => {
    runGenerator(path.join(__dirname, '..', 'generators', 'remove'), 'reazy-web-config-remove');
  }
}
