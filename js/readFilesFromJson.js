
const fs = require('fs');

const addFileToList = require('./addFileToList');

const readFilesFromJson = () => {
    fs.readFile('./directories.json', 'utf8', (err, data) => {
        if(err) throw err;

        data = JSON.parse(data);
        data.forEach(directory => {
            addFileToList(directory.path, {renderOnly: true});
        })
            
        
        
    })
}

module.exports = readFilesFromJson;