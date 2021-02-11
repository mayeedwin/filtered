const { filtered } = require("../lib");

// Test data...
const data = [
  {
    name: "Maye",
  },
  {
    name: "Lisa",
  },
];

// Filter field...
const filter = "name";

// Filter value...
const value = "l";

// Result...
test("Lisa is found", () => {
  expect(
    filtered({
      data,
      filter,
      value,
    })
  ).toStrictEqual([
    {
      name: "Lisa",
    },
  ]);
});
