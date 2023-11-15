// Importa el módulo 'path' de Node.js, que proporciona utilidades para trabajar con rutas de archivos y directorios.
const path = require("path");

// Define un array llamado 'mdwnExtension' que contiene diversas extensiones de archivo asociadas con archivos Markdown.
const mdwnExtension = [
  ".md",
  ".mkd",
  ".mdwn",
  ".mdown",
  ".mdtxt",
  ".mdtext",
  ".markdown",
  ".text",
];

// Define una función llamada 'isMdwnExtension' que toma un argumento 'filePath' (ruta del archivo) y determina si la extensión del archivo es una extensión de Markdown.
const isMdwnExtension = (filePath) => {
  // Obtiene la extensión del archivo utilizando la función 'extname' del módulo 'path'.
  const fileExtension = path.extname(filePath);

  // Retorna true si la extensión del archivo está incluida en el array 'mdwnExtension', indicando que es un archivo Markdown.
  return mdwnExtension.includes(fileExtension);
};

// Exporta la función 'isMdwnExtension' para que pueda ser utilizada en otros archivos que requieran este módulo.
module.exports = isMdwnExtension;
