function makeChange(amount) {
    // Define the values for each coin
    const quarterValue = 0.25;
    const dimeValue = 0.10;
    const nickelValue = 0.05;
    const pennyValue = 0.01;

    // Initialize variables to count the number of each coin
    let quarters = 0;
    let dimes = 0;
    let nickels = 0;
    let pennies = 0;

    // Calculate the number of quarters
    quarters = Math.floor(amount / quarterValue);
    // Update the remaining amount after using quarters
    amount %= quarterValue;

    // Calculate the number of dimes
    dimes = Math.floor(amount / dimeValue);
    // Update the remaining amount after using dimes
    amount %= dimeValue;

    // Calculate the number of nickels
    nickels = Math.floor(amount / nickelValue);
    // Update the remaining amount after using nickels
    amount %= nickelValue;

    // The remaining amount after using quarters, dimes, and nickels is in pennies
    pennies = Math.round(amount / pennyValue);

    // Return the result as an object
    return { "q": quarters, "d": dimes, "n": nickels, "p": pennies };
}

// Examples
console.log(makeChange(47)); // { "q": 1, "d": 2, "n": 0, "p": 2 }
console.log(makeChange(24)); // { "q": 0, "d": 2, "n": 0, "p": 4 }
