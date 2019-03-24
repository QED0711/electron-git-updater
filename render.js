const handleFileDrag = require('./js/handleFileDrag');
const gitProcess = require('./js/gitProcess')
const getCurrentFilePaths = require('./js/getCurrentFiles');

let currentTime,
    currentFilePaths;
 
handleFileDrag();

setInterval(() => {
    currentTime = new Date();
    currentFilePaths = getCurrentFilePaths();

    for(path of currentFilePaths){
        gitProcess(path, currentTime);
    }
}, 30000)






