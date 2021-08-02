// setup global object with prices
const store = {
  apples: 3,
  grapes: 5,
  peaches: 7,
};

// total takes in an array of [item, quantities]. Returns a total.
const total = (list) => {
  let grandTotal = 0;
  for (const item of list) {
    switch (item[0]) {
      case "apples":
        item[1] > 0 ? (grandTotal += appleCalc(item[1])) : null;
        break;
      // probably could change peaches to a default statement, as no special discount/deal applies to them.
      case "peaches":
        item[1] > 0 ? (grandTotal += store.peaches * item[1]) : null;
        break;
      case "grapes":
        item[1] > 0 ? (grandTotal += grapeCalc(item[1])) : null;
        break;
    }

    /* Kept this if/else block in just to show my initial setup. Switched to a switch statement because I think it'd be
     * easier to expand if more items were added (oranges, bananas, etc)
     */

    // if (item[0] === "apples" && item[1] > 0) {
    //   grandTotal += appleCalc(item[1]);
    // } else if (item[0] === "peaches" && item[1] > 0) {
    //   grandTotal += store.peaches * item[1];
    // } else if (item[0] === "grapes" && item[1] > 0) {
    //   grandTotal += grapeCalc(item[1]);
    // }
  }
  return grandTotal;
};

const appleCalc = (amount) => {
  const appleDiscount = amount * store.apples * 0.2; // calc discount
  const appleTotal =
    amount >= 2 ? store.apples * amount - appleDiscount : store.apples;

  return appleTotal;
};

const grapeCalc = (amount) => {
  let grapeTotal = 0;
  if (amount % 2 !== 0) {
    // add one instance of grapes if amount is odd. Rest is calculated using "two for price of one"
    grapeTotal += store.grapes;
    amount--;
  }
  // buy one, get another free.
  grapeTotal += store.grapes * amount * 0.5;
  return grapeTotal;
};

//example inputs
console.log(
  "1. The total is: $",
  total([
    ["grapes", 1],
    ["apples", 0],
    ["peaches", 1],
  ])
); // expect 12

console.log(
  "2. The total is: $",
  total([
    ["grapes", 1],
    ["apples", 1],
    ["peaches", 1],
  ])
); // expect 15

console.log(
  "3. The total is: $",
  total([
    ["grapes", 2],
    ["apples", 2],
    ["peaches", 1],
  ])
); // expect 16.8

console.log(
  "4. The total is: $",
  total([
    ["grapes", 3],
    ["apples", 5],
    ["peaches", 2],
  ])
); // expect 36

console.log(
  "5. The total is: $",
  total([
    ["grapes", 7],
    ["apples", 7],
    ["peaches", 7],
  ])
); // expect 85.8
