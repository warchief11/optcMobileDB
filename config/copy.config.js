const copyConfig = require('@ionic/app-scripts/config/copy.config.js');

//extend  copyconfig to copy bower components.
//TODO: integrate bundling/minification of js files.
copyConfig.copyIndexContent.src.push('./extLibs/*.js');