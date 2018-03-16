const fs = require('fs');



class FsHelper {
  static checkAndCreateDirSync(directory) {  
    try {
      fs.statSync(directory);
    } catch(e) {
      fs.mkdirSync(directory);
    }
  }
}


module.exports = FsHelper;