const path = require('path');
const fs = require('fs');

module.exports = function (fileName) {
    const filePath = path.join(__dirname, fileName);
    const pagina= "La pagina donde podes encontrar la broma es https://icanhazdadjoke.com/j/<CON EL ID OTORGADO EN LA BUSQUEDA> |\r\n";

    return function (text) {
        return new Promise((resolve, reject) => {

            fs.appendFile(filePath, pagina, (err) => {
                if (err) reject(err);
                resolve(true);
            });

            fs.appendFile(filePath, text, (err) => {
                if (err) reject(err);
                resolve(true);
            });

        });
    };
};
