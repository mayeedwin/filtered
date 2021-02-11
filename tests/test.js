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
const query = "l";

// Result...
test("Lisa is found", () => {
  expect(
    filtered({
      data,
      filter,
      query,
    })
  ).toStrictEqual([
    {
      name: "Lisa",
    },
  ]);
});
