
const handleDeleteItem = require("./handleDeleteItem");
const handleCheckboxChange = require('./handleCheckboxChange');

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

    // append file/folder to the ul tag
    addFileToList = (path) => {

        const nodeTemplate = `
            <div class="file-path" data-path="${path}">
                <p>${path}</p>
                <button class="remove-list-item">Remove Path</button>
                
                <br>
                <label for="${path}">Monitor Directory</label>
                <input type="checkbox" class="toggle-monitor" id="${path}" checked="true"/>
            </div>
        `

        files.innerHTML = files.innerHTML + nodeTemplate;
        handleDeleteItem();
        handleCheckboxChange();
    }

}

module.exports = handleFileDrag;

