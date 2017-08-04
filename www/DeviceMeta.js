var exec = require('cordova/exec');

function DeviceMeta () {
}

DeviceMeta.prototype.getDeviceMeta = function(success, error) {
  exec(success, error, "DeviceMeta", "getDeviceMeta", []);
};

module.exports = new DeviceMeta();
