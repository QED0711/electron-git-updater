
const shell = require('shelljs')

const callGitProcess = async () => {
    await shell.exec("git add .", {async: true});
    await shell.exec('git commit -m "this is a test commit"' , {async: true});
    await shell.exec('git push -u origin master' , {async: true});
}

callGitProcess();

shell.exec("git add .", {async: true});

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

// append file/folder to the ul tag
addFileToList = (file) => {
    const node = document.createElement("li")
    node.innerText = file
    files.appendChild(node);
}

