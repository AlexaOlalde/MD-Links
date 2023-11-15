// Importa la función mdLinks del archivo mdlinks.js ubicado en la carpeta ./lib/
const { mdLinks } = require("./lib/mdlinks.js");

// Llama a la función mdLinks con el archivo "./examples.md" y el segundo argumento true
// El segundo argumento indica si se deben incluir detalles adicionales al extraer los enlaces (como el texto y el archivo)
mdLinks("./examples.md", true)
  // Si la promesa se resuelve correctamente, imprime los enlaces en la consola
  .then((links) => {
    console.log(links);
    // => [{ href, text, file }, ...]
  })

  // Si la promesa se rechaza, imprime el error en la consola
  .catch(console.error);
