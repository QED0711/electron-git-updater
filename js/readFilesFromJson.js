
const fs = require('fs');

const readFilesFromJson = () => {
    fs.readFile('./directories.json', 'utf8', (err, data) => {
        if(err) throw err;

        data = JSON.parse(data);
        
    })
}

module.exports = readFilesFromJson;