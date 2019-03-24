


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
        // const node = document.createElement("li")
        const nodeTemplate = document.getElementById('file-display-template')
        const newNode = nodeTemplate.content.querySelector("div"); 
        debugger
        newNode.getElementsByTagName("p")[0].innerText = path;
        files.appendChild(newNode);
     
    }

}

module.exports = handleFileDrag;

