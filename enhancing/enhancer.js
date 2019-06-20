module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  console.log(item);
  return item.durability;
}

function get(item) {
  return { ...item };
}
