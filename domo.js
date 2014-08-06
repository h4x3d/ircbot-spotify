var Domo, domo;
Domo = require('domo-kun');

domo = new Domo({
  nick: 'Seppo',
  userName: 'Seppo',
  realName: 'Seppo',
  address: 'irc.quakenet.org',
  channels: ['#h4x3d'],
  users: [
    {
      username: 'lauri',
      password: 'lol'
    }
  ],
  debug: true
});

domo.use(domo.basicRoutes());

var routes = require('./routes');
for(path in routes) {
  domo.route(path, routes[path]);
}

domo.connect();