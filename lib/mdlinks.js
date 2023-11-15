// Importa el módulo 'path' para trabajar con rutas de archivos y directorios.
const path = require("path");
// Importa el módulo 'fs' para interactuar con el sistema de archivos.
const fs = require("fs");
// Importa módulos personalizados desde otros archivos
const isMdwnExtension = require("./verifyExtension");
const readMkdwnFile = require("./readFile");
const extractMarkdownLinks = require("./extractfile");
const validateLinks = require("./validatelinks");

// Define la función mdLinks que toma una ruta de archivo (route) y una bandera opcional de validación (validate).
const mdLinks = (route, validate = false) => {
  // Retorna una nueva promesa para manejar operaciones asíncronas.
  return new Promise((resolve, reject) => {
    try {
      // Resuelve la ruta del archivo a una ruta absoluta.
      const absolute = path.resolve(route);

      // Verifica si la ruta del archivo existe.
      const pathExist = fs.existsSync(absolute);

      if (pathExist) {
        // Si la ruta existe, verifica si la extensión del archivo es '.md'.
        if (isMdwnExtension(absolute)) {
          // Lee el contenido del archivo Markdown.
          readMkdwnFile(absolute).then((result) => {
            if (validate) {
              // Si la bandera 'validate' está presente, extrae los enlaces y los valida.
              const linksArray = extractMarkdownLinks(result, absolute);
              const resultValidate = validateLinks(linksArray);

              // Utiliza Promise.all para esperar a que todas las promesas de validación se resuelvan.
              Promise.all(resultValidate)
                .then((response) => {
                  // Imprime los resultados de la validación si la bandera 'validate' está presente.
                  console.log(response);
                })
                .catch((error) => {
                  // Imprime errores de validación.
                  console.log(error);
                });
            } else {
              // Si la bandera 'validate' no está presente, resuelve los enlaces extraídos.
              resolve(extractMarkdownLinks(result, absolute));
            }
          });
        } else {
          // Rechaza la promesa si la extensión del archivo no es '.md'.
          reject(new Error("Is not a Markdown file"));
        }
      } else {
        // Rechaza la promesa si la ruta del archivo no existe.
        reject(new Error("Path does not exist"));
      }
    } catch (e) {
      // Captura y rechaza la promesa con el objeto de excepción si hay algún error.
      reject(e);
    }
  });
};

// Exporta la función mdLinks para que pueda ser utilizada en otros módulos.
module.exports = { mdLinks };
