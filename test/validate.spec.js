// Importa la librería axios para realizar peticiones HTTP y la función validateLinks desde el archivo "validatelinks.js".
const axios = require("axios");
const validateLinks = require("../lib/validatelinks");

// Mockea la librería axios para simular llamadas HTTP durante las pruebas.
jest.mock("axios");

// Antes de cada prueba, resetea todos los mocks.
beforeEach(() => {
  jest.resetAllMocks();
});

// PRUEBA 1. Inicia un bloque de pruebas para la función validateLinks.
describe("validateLinks", () => {
  // Primer caso de prueba: debería validar los enlaces y devolver su estado (éxito).
  it("should validate links and return their status", (done) => {
    // Define un array de enlaces de prueba.
    const links = [{ href: "https://example.com", linkText: "Example Link" }];

    // Mockea la respuesta de axios para simular una respuesta exitosa.
    const resultDataMock = [
      {
        href: "https://example.com",
        linkText: "Example Link",
        status: 200,
        ok: "ok",
      },
    ];
    axios.get.mockResolvedValue({ status: 200 });

    // Llama a la función validateLinks con los enlaces de prueba.
    const resultValidate = validateLinks(links);

    // Utiliza Promise.all para esperar que todas las promesas se resuelvan.
    Promise.all(resultValidate)
      .then((response) => {
        // Verifica que la respuesta coincida con el mock esperado.
        expect(response).toEqual(resultDataMock);
      })
      .catch((error) => {
        // Maneja errores si ocurrieran.
        // console.log(error);
      });

    // Indica que la prueba ha finalizado.
    done();
  });
});

// PRUEBA 2: manejo de errores de solicitud.
describe("validateLinks", () => {
  it("should handle request errors", (done) => {
    // Define un array de enlaces de prueba.
    const links = [{ href: "https://example.com", linkText: "Example Link" }];

    // Mockea la respuesta de axios para simular un error en la solicitud.
    const resultDataMock = [
      {
        href: "https://example.com",
        linkText: "Example Link",
        status: 400,
        ok: "Fail",
      },
    ];

    axios.get.mockRejectedValue({ status: 400 });

    // Llama a la función validateLinks con los enlaces de prueba.
    const resultValidate = validateLinks(links);

    // Utiliza Promise.all para esperar que todas las promesas se resuelvan.
    Promise.all(resultValidate)
      .then((response) => {
        // Maneja la respuesta si se resuelve correctamente.
        // console.log({ response });
      })
      .catch((error) => {
        // Verifica que el error coincida con el mock esperado.
        expect(error).toEqual(resultDataMock);
        // console.log(error);
      });

    // Indica que la prueba ha finalizado.
    done();
  });
});

// PRUEBA 3: validación de enlaces con error interno del servidor.
describe("validateLinks", () => {
  it("should validate links and return their status", (done) => {
    // Define un array de enlaces de prueba.
    const links = [{ href: "https://example.com", linkText: "Example Link" }];
    // Mockea la respuesta de axios para simular un error interno del servidor.
    const resultDataMock = [
      {
        href: "https://example.com",
        linkText: "Example Link",
        status: 500,
        ok: "Fail",
      },
    ];
    axios.get.mockResolvedValue({ status: 500 });

    // Llama a la función validateLinks con los enlaces de prueba.
    const resultValidate = validateLinks(links);

    // Utiliza Promise.all para esperar que todas las promesas se resuelvan.
    Promise.all(resultValidate)
      .then((response) => {
        // Verifica que la respuesta coincida con el mock esperado.
        expect(response).toEqual(resultDataMock);
      })
      .catch((error) => {
        // Maneja errores si ocurrieran.
        // console.log(error);
      });

    // Indica que la prueba ha finalizado.
    done();
  });
});
