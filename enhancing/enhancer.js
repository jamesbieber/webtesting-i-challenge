module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  if (!item || !item.enhancement) {
    return "Enhancement missing or no item passed.";
  }

  if (item.enhancement === 20) {
    return { ...item };
  } else {
    item.enhancement += 1;
    return { ...item };
  }
}

function fail(item) {
  const test = item;

  if (!test || !test.enhancement) {
    return "Enhancement missing or no item passed.";
  }

  if (test.enhancement < 15) {
    test.durability -= 5;
    return test;
  } else {
    test.durability -= 10;
    if (test.enhancement > 16) {
      test.enhancement -= 1;
      return test;
    }
    return test;
  }
}

function repair(item) {
  const test = item;
  if (!test || !test.durability) {
    return "Durability missing or no item passed.";
  } else {
    test.durability = 100;
    return test;
  }
}

function get(item) {
  return { ...item };
}
