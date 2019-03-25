const handleFileDrag = require('./js/handleFileDrag');
const gitProcess = require('./js/gitProcess')
const getCurrentFilePaths = require('./js/getCurrentFiles');
const readFileFromJson = require('./js/readFilesFromJson');

let currentTime,
    currentFilePaths;

// populate with file paths saved in local storage
readFileFromJson();

// set file drag in window
handleFileDrag();

setInterval(() => {
    currentFilePaths = getCurrentFilePaths();

    if(currentFilePaths.length){
        currentTime = new Date();
    

        for(path of currentFilePaths){
            gitProcess(path, currentTime);
        }
    }
    
}, 300000)
