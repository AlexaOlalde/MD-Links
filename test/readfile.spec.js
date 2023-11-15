// Importa el módulo 'fs' (sistema de archivos) de Node.js.
const fs = require("fs");

// Importa la función 'readMkdwnFile' desde el archivo "../lib/readFile".
const readMkdwnFile = require("../lib/readFile");

// Mockea el módulo fs para simular su comportamiento en las pruebas.
jest.mock("fs");

// Inicia la descripción de las pruebas para la función 'readMkdwnFile'.
describe("readMkdwnFile", () => {
  // PRUEBA 1: Debería leer un archivo Markdown y devolver su contenido.
  it("should read a Markdown file and return its content", () => {
    // Ruta del archivo Markdown de ejemplo.
    const filePath = "./examples.md";

    // Llama a la función 'readMkdwnFile' con la ruta del archivo y realiza expectativas (expectations) sobre el resultado.
    readMkdwnFile(filePath).then((content) => {
      expect(content).toBeDefined();
      expect(typeof content).toEqual("string");
    });
  });

  // PRUEBA 2: Debería rechazar con un error si el archivo no existe.
  it("should reject with an error if the file does not exist", () => {
    // Ruta de un archivo que no existe.
    const filePath = "./nonexistmarkadownfile.md";

    // Llama a la función 'readMkdwnFile' con la ruta del archivo y realiza expectativas sobre el resultado.
    readMkdwnFile(filePath)
      .then((result) => {
        // Si tiene éxito, espera que el resultado sea 'undefined'.
        expect(result).toBeUndefined();
      })
      .catch((error) => {
        // Si hay un error, espera que el error esté definido y tenga propiedades específicas.
        expect(error).toBeDefined();
        expect(error).toHaveProperty("code");
        expect(typeof error).toEqual("object");
      });
  });

  // PRUEBA 3: Debería rechazar con un error cuando el archivo no existe (forma asíncrona usando 'async/await').
  it("should reject with an error when the file does not exist", async () => {
    // Crea un objeto Error para representar un error de archivo no encontrado.
    const error = new Error("File not found");

    // Implementa el comportamiento mock de 'fs.readFile' para simular un archivo que no existe.
    fs.readFile.mockImplementationOnce((path, encoding, callback) => {
      callback(error, null);
    });

    // Ruta de un archivo que no existe.
    const markdownFile = "nonexistent/file/path.md";

    // Utiliza 'expect' junto con 'rejects.toThrow' para verificar si la función lanza el error esperado.
    await expect(readMkdwnFile(markdownFile)).rejects.toThrow(error);
  });

  // PRUEBA 4: Debería resolver con datos cuando el archivo existe (forma asíncrona usando 'async/await').
  it("should resolve with data when the file does exist", async () => {
    // Datos de ejemplo que se supone que se leerán del archivo.
    const data = "Return the content";

    // Implementa el comportamiento mock de 'fs.readFile' para simular un archivo existente.
    fs.readFile.mockImplementationOnce((path, encoding, callback) => {
      callback(null, data);
    });

    // Ruta de un archivo que existe.
    const markdownFile = "existent/file/path.md";

    // Utiliza 'expect' junto con 'resolves.toEqual' para verificar si la función devuelve los datos esperados.
    await expect(readMkdwnFile(markdownFile)).resolves.toEqual(data);
  });
});
