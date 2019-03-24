const handleFileDrag = require('./js/handleFileDrag');
const gitProcess = require('./js/gitProcess')
const getCurrentFilePaths = require('./js/getCurrentFiles');

let currentTime,
    currentFilePaths;
 
handleFileDrag();

setInterval(() => {
    currentFilePaths = getCurrentFilePaths();

    if(currentFilePaths.length){
        currentTime = new Date();
    

        for(path of currentFilePaths){
            gitProcess(path, currentTime);
        }
    }
    
}, 30000)






