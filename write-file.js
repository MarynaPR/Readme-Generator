const fs = require('fs');

// writing files
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./output/Readme.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'Readme created!'
            });
        });
    });
};

module.exports = { writeFile };