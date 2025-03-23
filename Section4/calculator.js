"use strict";
function calculateInvestment(data) {
    const { initialAmount, annualContribution, expectedReturn, duration } = data;
    if (initialAmount < 0) {
        return 'Initial Investment Amount must be at least zero.';
    }
    if (duration < 0) {
        return 'No valid amount of years provided';
    }
    if (expectedReturn < 0) {
        return 'Expected return must be at least zero.';
    }
    let total = initialAmount;
    let totalContributions = 0;
    let totalInterestEarned = 0;
    const annualResults = [];
    for (let i = 0; i < duration; i++) {
        total = total * (1 + expectedReturn);
        totalInterestEarned = total - totalContributions - initialAmount;
        totalContributions = totalContributions + annualContribution;
        total = total + annualContribution;
        annualResults.push({
            totalAmount: total,
            totalContributions,
            totalInterestEarned,
            year: `Year: ${i + 1}`,
        });
    }
    return annualResults;
}
// tslint:disable-next-line:no-shadowed-variable
function printResults(results) {
    // print (output) the result data
    if (typeof results === 'string') {
        // tslint:disable-next-line:no-console
        console.log(results);
        return;
    }
    for (const yearEnd of results) {
        // tslint:disable-next-line:no-console
        console.log(`End: ${yearEnd.year} \n Total: ${yearEnd.totalAmount.toFixed(2)} \nContributions: ${yearEnd.totalContributions.toFixed(0)} \nInterest Earned: ${yearEnd.totalInterestEarned.toFixed(2)} \n--------------------------`);
    }
}
const investmentData = {
    annualContribution: 500,
    duration: 10,
    expectedReturn: 0.08,
    initialAmount: 10000,
};
const results = calculateInvestment(investmentData);
printResults(results);
