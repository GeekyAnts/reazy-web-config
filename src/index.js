
export default function(params) {
  return function(serviceName) {
    const app = this;

    // const env = require(params.envPath);
    console.log('env', params.env);

    app[serviceName] = params.env;

    return params.env;
  }

}
