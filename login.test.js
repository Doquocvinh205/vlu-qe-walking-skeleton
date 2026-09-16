const login = require("./login");

describe("login()", () => {
  test("trả về true khi username và password chính xác", () => {
    expect(login("admin", "123")).toBe(true);
  });

  test("trả về false khi username sai", () => {
    expect(login("user", "123")).toBe(false);
  });

  test("trả về false khi password sai", () => {
    expect(login("admin", "wrong")).toBe(false);
  });

  test("trả về false khi cả hai đều sai", () => {
    expect(login("user", "wrong")).toBe(false);
  });
});
