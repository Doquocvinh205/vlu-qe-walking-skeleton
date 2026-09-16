const checkLogin = require("./login");

describe("Kiểm tra chức năng đăng nhập", () => {
  test("Đăng nhập đúng với admin / 123", () => {
    expect(checkLogin("admin", "123")).toBe(true);
  });

  test("Sai mật khẩu", () => {
    expect(checkLogin("admin", "456")).toBe(false);
  });

  test("Sai username", () => {
    expect(checkLogin("user", "123")).toBe(false);
  });

  test("Sai cả username và password", () => {
    expect(checkLogin("user", "456")).toBe(false);
  });
});
