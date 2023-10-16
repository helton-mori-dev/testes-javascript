const { queryString, parse } = require("./queryString");

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

describe("QueryString para objeto", () => {
  it("Deve converter uma query string em objeto", () => {
    const qs = "name=Fabio&profession=developer";
    expect(parse(qs)).toEqual({
      name: "Fabio",
      profession: "developer",
    });
  });

  it("Deve converter uma query string de apenas uma chave-valor em objeto", () => {
    const qs = "name=Fabio";
    // console.log(parse(qs));
    expect(parse(qs)).toEqual({
      name: "Fabio",
    });
  });

  it("Deve converter uma query string para objeto cuidando de valores separados por vírgula", () => {
    const qs = "name=Fabio&abilities=JS,TDD";
    expect(parse(qs)).toEqual({
      name: "Fabio",
      abilities: ["JS", "TDD"],
    });
  });
});
