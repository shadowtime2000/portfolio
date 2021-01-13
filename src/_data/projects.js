const path = require("path");
const fs = require("fs");

module.exports = function () {
    const projectFiles = fs.readdirSync(path.join(__dirname, "./project"));

    const projects = [];

    projectFiles.forEach(projectFile => {
        projects.push(JSON.parse(fs.readFileSync(path.join(__dirname, "./project", projectFile))));
    });

    console.log(projects)

    return projects;
}