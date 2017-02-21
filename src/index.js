
export default function(params) {
  return function(serviceName) {
    const app = this;

    app[serviceName] = params.env;

    return params.env;
  }

}
