
const fs = require('fs')

const handleCheckboxChange = () => {
    const checkboxes = [...document.getElementsByClassName("toggle-monitor")];

    checkboxes.forEach(check => {
        check.onchange = (e) => {
            // here, do something with the "databse" to mark this path as inactive
            fs.readFile('./directories.json', 'utf8', (err, data) => {
                if(err)  throw err;
                let directories = JSON.parse(data)
                for(let d of directories){
                    if(d.path === e.target.id){
                        d.monitor = !d.monitor;
                        break;
                    }
                }
                fs.writeFile('./directories.json', JSON.stringify(directories), (err) => {
                    if(err) throw err;
                })
            })
            
        }
    })
} 

module.exports = handleCheckboxChange;