// import the Employee class
const Employee = require("../lib/Employee");

// create a suite with describe

describe("Employee", () => {
  describe("constructor", () => {
    it("sets name, id and email properties", () => {
      const name = "Israel";

      const employee = new Employee("Israel", 5, "israel@email.com");

      expect(employee).toEqual({
        name: "Israel",
        id: 5,
        email: "israel@email.com",
      });
    });
  });

  describe("getName", () => {
    const employee = new Employee("Israel", 5, "israel@email.com");

    const result = employee.getName();

    expect(result).toBe("Israel");
  });
});
