
function getBalance(customer_amount, bill_amount, denomination_array) {
    let balance = customer_amount - bill_amount;
    const balanceObject = {};
    for (const value of denomination_array.values()) {
        balanceObject[value] = 0;
    }
    for (let index = 0; index < denomination_array.length; index++) {
        balanceObject[denomination_array[index]] = Math.floor(
        balance / denomination_array[index]
        );
        if (balanceObject[denomination_array[index]] > 0) {
        balance =
            balance -
            denomination_array[index] * balanceObject[denomination_array[index]];
        }
    }
  return balanceObject;
}

export default getBalance;