const { repair, succeed, fail, get } = require("./enhancer.js");

const item = {
  name: "Sword of Jest",
  durability: 30,
  enhancement: 15
};

const item1 = {
  name: "Axe of Jest",
  durability: 30,
  enhancement: 20
};

const item2 = {
  name: "Armband of Turing",
  durability: 10,
  enhancement: 5
};

describe("the repair function", () => {
  it("should return error message with no item or durability", () => {
    expect(repair()).toBe("Durability missing or no item passed.");
  });

  it("should set the durability of an item to 100", () => {
    expect(repair(item)).toStrictEqual({ ...item, durability: 100 });
  });
});

describe("the succeed function", () => {
  it("should return error message with no item or enhancement", () => {
    expect(succeed()).toBe("Enhancement missing or no item passed.");
  });

  it("should not change enhancement if the item enhancement level is 20", () => {
    expect(succeed(item1)).toStrictEqual({ ...item1 });
  });

  it("should increase enhancement by 1 if the enhancement level is not equal to 20", () => {
    expect(succeed(item)).toStrictEqual({ ...item, enhancement: 16 });
  });
});

describe("the fail function", () => {
  it("should return error message with no item or enhancement", () => {
    expect(fail()).toBe("Enhancement missing or no item passed.");
  });

  it("should decrease durability by 5 if enhancement level is less than 15", () => {
    expect(fail(item2)).toStrictEqual({ ...item2, durability: 5 });
  });

  it("should decrease durability by 10 if enhancement level is 15 or more", () => {
    expect(fail(item)).toStrictEqual({ ...item, durability: 90 });
  });
});
