
const fs = require('fs');

const handleDeleteItem = require("./handleDeleteItem");
const handleCheckboxChange = require('./handleCheckboxChange');

 // create a new file item
 const addFileToList = async (path) => {

    const nodeTemplate = `
        <div class="file-path">
            <p>${path}</p>
            <button class="remove-list-item">Remove Path</button>
            
            <br>
            <label for="${path}">Monitor Directory</label>
            <input type="checkbox" class="toggle-monitor" id="${path}" checked="true"/>
        </div>
    `

    files.innerHTML = files.innerHTML + nodeTemplate;
    
    // set the behavior of the delete and checkbox elements
    handleDeleteItem();
    handleCheckboxChange();

    // write the new path to the local json record for storage
    fs.readFile("./directories.json", 'utf8', (err, data) => {
        let directories = JSON.parse(data);
        directories.push({path, monitor: true})
        fs.writeFile('./directories.json', JSON.stringify(directories), (err) => {
            if(err) throw err;
        })
    })
    
}

module.exports = addFileToList;