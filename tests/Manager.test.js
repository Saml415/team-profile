const Manager = require("../lib/Manager");
const manager = new Manager("Israel", 5, "israel@email.com", 12);
describe("Manager", () => {
  describe("constructor", () => {
    it("sets name, id, email properties and office number", () => {
      expect(manager).toEqual({
        name: "Israel",
        id: 5,
        email: "israel@email.com",
        number: 12,
      });
    });
  });

  describe("getRole", () => {
    const result = manager.getRole();
    expect(result).toBe("Manager");
  });
});
