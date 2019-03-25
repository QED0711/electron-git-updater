const fs = require('fs');

const addFileToList = require('./addFileToList');




const handleFileDrag = () => {
    const drop = document.getElementById("document-holder");

    const files = document.getElementById("files");

    drop.addEventListener('dragover', function (e) {
        e.preventDefault();
        e.stopPropagation();
    });
    
    drop.addEventListener('drop', (e) => {
        e.preventDefault();
        e.stopPropagation();
        for (let f of e.dataTransfer.files) {
            addFileToList(f.path)
        }
    })

   

}

module.exports = handleFileDrag;

