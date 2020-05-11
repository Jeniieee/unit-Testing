/**
 * 修改下面的函数，并保证单元测试能够通过
 *
 * 提示: this
 */

function clone(obj) {
  return obj;
}

test("这是一个符合预期的clone函数", () => {
  let obj = { name: "hello" };
  let fun = clone(obj);

  expect(fun.name).toBe("hello");

  obj.name = "hi";
  expect(fun.name).toBe("hi");

  fun.name = "world";
  expect(obj.name).toBe("world");

  obj.name = "JavaScript";
  expect(obj.name).toBe("JavaScript");
});
