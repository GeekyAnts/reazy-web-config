import yeoman from 'yeoman-environment';

const env = yeoman.createEnv();

env.register(__dirname + '/generators/add', 'reazy-web-config-add');

env.run('reazy-web-config-add', { disableNotifyUpdate: true });
