// Importa la función extractMarkdownLinks desde el módulo ubicado en "../lib/extractfile"
const extractMarkdownLinks = require("../lib/extractfile");

// Inicia una suite de pruebas usando describe() para la función extractMarkdownLinks
describe("extractMarkdownLinks", () => {
  // PRIMER CASO DE PRUEBA: debería extraer enlaces Markdown del contenido proporcionado
  it("should extract Markdown links from content", () => {
    // Define un contenido de ejemplo con un enlace Markdown
    const content = "This is [a link](https://example.com) to an example site.";

    // Define el resultado esperado para el contenido de ejemplo
    const expectedLinks = [
      { linkText: "a link", href: "https://example.com", file: undefined },
    ];

    // Comprueba si la función extractMarkdownLinks produce el resultado esperado
    expect(extractMarkdownLinks(content)).toEqual(expectedLinks);
  });

  // SEGUNDO CASO DE PRUEBA: debería manejar múltiples enlaces en el contenido proporcionado
  it("should handle multiple links in content", () => {
    // Define un contenido de ejemplo con dos enlaces Markdown
    const content =
      "Check out [Example](https://example.com) and [Google](https://google.com).";

    // Define el resultado esperado para el contenido con múltiples enlaces
    const expectedLinks = [
      { linkText: "Example", href: "https://example.com", file: undefined },
      { linkText: "Google", href: "https://google.com", file: undefined },
    ];

    // Comprueba si la función extractMarkdownLinks produce el resultado esperado
    expect(extractMarkdownLinks(content)).toEqual(expectedLinks);
  });
});
