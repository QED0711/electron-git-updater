const getCurrentFilePaths = () => {
    const items = [...document.getElementById("files").childNodes].map(x => x.innerText);
    return items;    
}

module.exports = getCurrentFilePaths