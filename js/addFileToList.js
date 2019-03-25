
const fs = require('fs');

const handleDeleteItem = require("./handleDeleteItem");
const handleCheckboxChange = require('./handleCheckboxChange');

 // create a new file item
 const addFileToList = (path, options = {renderOnly: false}) => {
     
    // create a new html node to display the path
      const nodeTemplate = `
        <div class="file-path" id="${path}">
            <p>${path}</p>
            <button class="remove-list-item">Remove Path</button>
            
            <br>
            <label for="${path}">Monitor Directory</label>
            <input type="checkbox" class="toggle-monitor" checked="true"/>
        </div>
    `
    // add new node to the dom
    files.innerHTML = files.innerHTML + nodeTemplate;
    
    // set the behavior of the delete and checkbox elements in the new node
    handleDeleteItem();
    handleCheckboxChange();
    
    // throughout the process, track to make sure that the new path will not be arepeat of a current path
    let repeatPath = false

   // write the new path to the local json record for storage
    fs.readFile("./directories.json", 'utf8', (err, data) => {
        let directories = JSON.parse(data);

        for(d of directories){
            if(d.path === path){
                repeatPath = true
                break;
            }
        }

        // if options specify to only render the path (not save it), then stop the process here
        if(options.renderOnly) return
        
        // if path is a repeat, stop execution here
        if(repeatPath){
            document.getElementById(path).remove();
            return
        }

        // add path to local storage JSON
        directories.push({path, monitor: true})
        fs.writeFile('./directories.json', JSON.stringify(directories), (err) => {
            if(err) throw err;
        })

    })

    
}

module.exports = addFileToList;