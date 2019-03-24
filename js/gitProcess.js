const { exec } = require('shelljs');

const gitProcess = async (path, datetime) => {    
    await exec(`git --git-dir=${path}/.git add .`, {async: true});
    await exec(`git --git-dir=${path}/.git commit -m "auto commit: ${datetime}"`, {async: true});
    await exec(`git --git-dir=${path}/.git push -u origin master`, {async: true});
    
}

module.exports = gitProcess;
