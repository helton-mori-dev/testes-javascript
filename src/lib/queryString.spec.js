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
});

// describe('Name of the group', () => {

// });
