const H1Z1servers = require("./h1z1-server");
const { Base64 } = require("js-base64");
var Zone = new H1Z1servers.ZoneServer(
  1117,
  Base64.toUint8Array("F70IaxuU8C/w7FPXY1ibXw==")
);

// For ps2
Zone._protocol = new H1Z1servers.H1Z1Protocol("ClientProtocol_703");

Zone.start();
