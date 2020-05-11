/**
 * 完善clone函数代码，并保证单元测试能够通过
 *
 * 提示: this
 */

function Foo() {
  getName = function() {
    return 1;
  };
  return this;
}
Foo.getName = function() {
  return 2;
};
Foo.prototype.getName = function() {
  return 3;
};
var getName = function() {
  return 4;
};

test("请保证符合预期执行结果", () => {
  expect(Foo.getName()).toBe(2);
  expect(getName()).toBe(4);
  expect(Foo.prototype.getName()).toBe(3);
  expect(getName()).toBe(4);
});
