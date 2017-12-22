var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'designing-intelligence'
    },
    port: 3000,
    //MongoDB URI: mongodb://heroku_n8kb4b7b:6919jj9ks1prdkfgih2m1q2fpu@ds045684.mongolab.com:45684/heroku_n8kb4b7b
    //Find out more about URI and DB connection here: https://devcenter.heroku.com/articles/mongolab#connecting-to-existing-mongolab-deployments-from-heroku
    db: 'mongodb://heroku_2v0hfvxz:8j5ha8ou7gj8a01s7iobmef0e8@ds155192.mlab.com:55192/heroku_2v0hfvxz'
  },

  test: {
    root: rootPath,
    app: {
      name: 'designing-intelligence'
    },
    port: 3000,
    db: 'mongodb://localhost/designing-intelligence-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'realjoet-me'
    },
    port: process.env.PORT,
    db: process.env.MONGOLAB_URI
  }
};

module.exports = config[env];
