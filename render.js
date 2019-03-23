
const shell = require('shelljs')

shell.exec("echo $PWD")
shell.exec('node --version')

const files = document.getElementById("files");
const drop = document.getElementById("document-holder");

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



addFileToList = (file) => {
    const node = document.createElement("li")
    node.innerText = file
    files.appendChild(node);
}

