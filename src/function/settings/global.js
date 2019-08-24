const globalSettings = defvalue => {
  global.sharedObject = {
    someProperty: defvalue
  };
};

module.exports = globalSettings;
