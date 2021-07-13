const Engineer = require("../lib/Engineer");
const engineer = new Engineer("Max", 2, "max@email.com", "maxd");
describe("Engineer", () => {
  describe("constructor", () => {
    it("sets name, id, email properties and GitHub account", () => {
      expect(engineer).toEqual({
        name: "Max",
        id: 2,
        email: "max@email.com",
        account: "maxd",
      });
    });
  });
  describe("getGithub", () =>{
      const result = engineer.account
      expect(result).toBe("maxd")
  });
  describe("getRole",()=>{
      const result = engineer.getRole();
      expect(result).toBe("Engineer")
  })
});
