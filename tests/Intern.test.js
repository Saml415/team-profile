const Intern = require("../lib/Intern");
const intern = new Intern("Felix", 34, "felix@email.com", "UW");

describe("Engineer", () => {
  describe("constructor", () => {
    it("sets name, id, email properties and office number", () => {
      expect(intern).toEqual({
        name: "Felix",
        id: 34,
        email: "felix@email.com",
        school: "UW",
      });
    });
  });

  describe("getSchool", () => {
    const result = intern.getSchool();
    expect(result).toBe("UW");
  });
  describe("getRole", () => {
    const result = intern.getRole();
    expect(result).toBe("Intern");
  });
});
