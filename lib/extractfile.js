// La función `extractMarkdownLinks` toma dos parámetros: `content` y `route`.
// `content` es el contenido en formato markdown del cual se extraerán los enlaces.
// `route` es la ruta del archivo del cual se está extrayendo el contenido.
const extractMarkdownLinks = (content, route) => {
  // Se define una expresión regular para encontrar patrones de enlaces en el formato markdown.
  // La expresión regular busca coincidencias de la forma "[texto del enlace](URL del enlace)".
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;

  // Se crea un array vacío llamado `links` para almacenar los objetos de enlace encontrados.
  const links = [];

  // Se utiliza un bucle `while` para iterar sobre todas las coincidencias encontradas por la expresión regular.
  let match;
  while ((match = regex.exec(content)) !== null) {
    // `match[1]` contiene el texto del enlace (lo que está dentro de los corchetes).
    const linkText = match[1];

    // `match[2]` contiene la URL del enlace (lo que está dentro de los paréntesis).
    const linkUrl = match[2];

    // Se agrega un objeto al array `links` con la información del enlace actual.
    // El objeto tiene propiedades `linkText` (texto del enlace), `href` (URL del enlace) y `file` (ruta del archivo).
    links.push({ linkText, href: linkUrl, file: route });
  }

  // Se devuelve el array `links` que contiene todos los enlaces encontrados en el contenido markdown.
  return links;
};

// Se exporta la función `extractMarkdownLinks` para que pueda ser utilizada en otros archivos.
module.exports = extractMarkdownLinks;
