// Importa la función mdwnExtension desde el módulo "../lib/verifyExtension".
const mdwnExtension = require("../lib/verifyExtension");

// Inicia una suite de pruebas llamada "isMdwnExtension" usando la función describe de Jest.
describe("isMdwnExtension", () => {
  // PRIMER CASO DE PRUEBA: verifica que la función devuelva true para extensiones de Markdown válidas.
  it("should return true for valid Markdown extensions", () => {
    // Lista de extensiones de archivo de Markdown válidas.
    const validExtensions = [
      ".md",
      ".markdown",
      ".mkd",
      ".mdown",
      ".mdwn",
      ".mdtxt",
      ".mdtext",
      ".text",
    ];

    // Para cada extensión en la lista de extensiones válidas, verifica que mdwnExtension devuelva true.
    validExtensions.forEach((ext) => {
      expect(mdwnExtension(`file${ext}`)).toBe(true);
    });
  });

  // SEGUNDO CASO DE PRUEBA: verifica que la función devuelva false para extensiones de archivo inválidas.
  it("should return false for invalid extensions", () => {
    // Lista de extensiones de archivo inválidas.
    const invalidExtensions = [".txt", ".html", ".js"];

    // Para cada extensión en la lista de extensiones inválidas, verifica que mdwnExtension devuelva false.
    invalidExtensions.forEach((ext) => {
      expect(mdwnExtension(`file${ext}`)).toBe(false);
    });
  });
});
