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
const query = "a";

// Result...
test("Find all", () => {
  expect(
    filtered({
      data,
      filter,
      query,
    })
  ).toStrictEqual([
    {
      name: "Maye",
    },
    {
      name: "Lisa",
    },
  ]);
});

// Result...
test("Lisa is found", () => {
  expect(
    filtered({
      data,
      filter,
      query: "li",
    })
  ).toStrictEqual([
    {
      name: "Lisa",
    },
  ]);
});

// Result...
test("Maye is found", () => {
  expect(
    filtered({
      data,
      filter,
      query: "Y",
    })
  ).toStrictEqual([
    {
      name: "Maye",
    },
  ]);
});
