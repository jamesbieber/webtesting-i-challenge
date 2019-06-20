const { repair, succeed, fail, get } = require("./enhancer.js");

const item = {
  name: "Sword of Jest",
  durability: 30,
  enchantment: 15
};

describe("the repair function", () => {
  it("should return an error message if item or durability doesnt exist", () => {
    expect(repair().toBe("No item was passed"));
  });

  it("should set the durability of an item to 100", () => {
    expect(repair(item).toBe(100));
  });
});
