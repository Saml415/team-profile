// import the Employee class
const Employee = require("../lib/Employee");
const employee = new Employee("Israel", 5, "israel@email.com");
// create a suite with describe

describe("Employee", () => {
  describe("constructor", () => {
    it("sets name, id and email properties", () => {
      expect(employee).toEqual({
        name: "Israel",
        id: 5,
        email: "israel@email.com",
      });
    });
  });

  describe("getName", () => {
    const result = employee.getName();

    expect(result).toBe("Israel");
  });
  describe("getId", () => {
    const result = employee.getId();

    expect(result).toBe(5);
  });
  describe("getEmail", () => {
    const result = employee.getEmail();

    expect(result).toBe("israel@email.com");
  });
  describe("getRole", () => {
    const result = employee.getRole();

    expect(result).toBe("Employee");
  });
});
