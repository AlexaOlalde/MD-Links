// Importa el módulo 'fs' (file system) que proporciona funciones para trabajar con el sistema de archivos.
const fs = require("fs");

// Define una función llamada 'readMkdwnFile' que toma un argumento llamado 'markdownFile'.
const readMkdwnFile = (markdownFile) => {
  // Crea un comentario para explicar la siguiente línea que está comentada.
  // Esto se puede descomentar si se desea imprimir el nombre del archivo en la consola.
  // console.log(markdownFile);

  // Retorna una nueva promesa que toma dos funciones de devolución de llamada como parámetros: 'resolve' y 'reject'.
  return new Promise((resolve, reject) => {
    // Utiliza la función 'readFile' del módulo 'fs' para leer el contenido del archivo especificado ('markdownFile').
    // El segundo argumento es "utf-8" para especificar la codificación del archivo como UTF-8.
    // La tercera función de devolución de llamada maneja cualquier error o éxito en la lectura del archivo.
    fs.readFile(markdownFile, "utf-8", (err, data) => {
      // Si hay un error al leer el archivo, ejecuta el bloque de código dentro de este condicional.
      if (err) {
        // Descomenta la siguiente línea si deseas imprimir el error en la consola.
        // console.log("error: ", err);

        // Rechaza la promesa con el error para indicar que la operación ha fallado.
        reject(err);
      } else {
        // Si no hay errores, resuelve la promesa con los datos leídos del archivo.
        resolve(data);
      }
    });
  });
};

// Exporta la función 'readMkdwnFile' para que pueda ser utilizada en otros archivos.
module.exports = readMkdwnFile;
