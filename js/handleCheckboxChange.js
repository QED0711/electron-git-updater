
const handleCheckboxChange = () => {
    const checkboxes = [...document.getElementsByClassName("toggle-monitor")];

    checkboxes.forEach(check => {
        check.onchange = (e) => {
            // here, do something with the "databse" to mark this path as inactive
            e.target.parentNode.id
        }
    })
} 

module.exports = handleCheckboxChange;