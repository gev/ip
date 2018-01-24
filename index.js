
const os = require('os');

module.exports = () => Object
  .values(os.networkInterfaces())
  .reduce((a, iface) => {
    iface
      .filter(i => !i.internal && i.family === 'IPv4')
      .forEach(i => a.push(i)); 
    return a;
  }, [])[0].address;

