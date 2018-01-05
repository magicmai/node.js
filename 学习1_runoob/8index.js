var server = require("./8server");
var router = require("./8router");
 
server.start(router.route);