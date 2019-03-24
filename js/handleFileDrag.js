


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
    addFileToList = (file) => {
        const node = document.createElement("li")
        node.innerText = file
        files.appendChild(node);
    }

}

module.exports = handleFileDrag;

