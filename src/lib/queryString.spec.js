const { queryString } = require("./queryString");

describe("Objeto para query string", () => {
  it("Deve criar uma query string valida se um objeto for recebido", () => {
    const obj = {
      name: "Fabio",
      profession: "developer",
    };
    queryString(obj);
    expect(queryString(obj)).toBe("name=Fabio&profession=developer");
  });

  it("Deve criar uma query string valida se uma array for recebida", () => {
    const obj = {
      name: "Fabio",
      abilities: ["JS", "TDD"],
    };
    expect(queryString(obj)).toBe("name=Fabio&abilities=JS,TDD");
  });

  it("Deve apontar erro se um objeto for passado como valor", () => {
    const obj = {
      name: "Fabio",
      abilities: {
        first: "JS",
        second: "TDD",
      },
    };

    expect(() => {
      queryString(obj);
    }).toThrowError();
  });
});

// describe('Name of the group', () => {

// });
