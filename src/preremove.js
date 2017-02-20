import yeoman from 'yeoman-environment';

const env = yeoman.createEnv();

env.register(__dirname + '/generators/remove', 'reazy-web-config-remove');

env.run('reazy-web-config-remove', { disableNotifyUpdate: true });
