/* main.js */

// Utility function to generate a random array of unique denominations (UI level)
function generateRandomDenoms(count, maxVal) {
    const denoms = [];
    while (denoms.length < count) {
      let num = Math.floor(Math.random() * maxVal) + 1;
      if (!denoms.includes(num)) {
        denoms.push(num);
      }
    }
    return denoms.sort((a, b) => a - b);
  }
  
  // Utility function to generate random price and payment (UI level)
  function generateRandomPricePaymentHelper(maxPrice) {
    const price = Math.floor(Math.random() * maxPrice) + 1;
    const payment = price + Math.floor(Math.random() * maxPrice);
    return { price, payment };
  }
  
  // Simulated API to interface with our solution
  let simulatedAPI = {
    denominations: [],
    price: 0,
    payment: 0,
    getNumBills: function() {
      return this.denominations.length;
    },
    getBill: function(i) {
      return this.denominations[i];
    },
    getPrice: function() {
      return this.price;
    },
    getPayment: function() {
      return this.payment;
    }
  };
  
  // Revised Solution class for Currency Exchange Challenge
  class Solution {
    constructor(api) {
      this.api = api;
      console.log('Solution initialized! Ready to solve tasks.');
    }
  
    // Retrieve denominations from API
    getDenominations() {
      const count = this.api.getNumBills();
      const denoms = [];
      for (let i = 0; i < count; i++) {
        denoms.push(this.api.getBill(i));
      }
      return denoms;
    }
  
    // Calculate the smallest unreachable amount using a greedy approach
    smallestUnreachable() {
      const denominations = this.getDenominations().sort((a, b) => a - b);
      let smallest = 1;
      for (let bill of denominations) {
        if (bill > smallest) break;
        smallest += bill;
      }
      return smallest;
    }
  
    // Calculate the minimum number of bills required for exact change using recursion with memoization
    minBills() {
      const price = this.api.getPrice();
      const payment = this.api.getPayment();
      const change = payment - price;
      if (change < 0) return -1;
      if (change === 0) return 0;
  
      const denominations = this.getDenominations();
      denominations.sort((a, b) => b - a);
      const result = this.recursiveMinBills(denominations, change, {});
      return result === Infinity ? -1 : result;
    }
  
    // Recursive helper for minBills with memoization
    recursiveMinBills(denominations, change, memo) {
      if (change === 0) return 0;
      if (change < 0) return Infinity;
      if (memo[change] !== undefined) return memo[change];
  
      let minCount = Infinity;
      for (let i = 0; i < denominations.length; i++) {
        let count = 1 + this.recursiveMinBills(denominations, change - denominations[i], memo);
        if (count < minCount) {
          minCount = count;
        }
      }
      memo[change] = minCount;
      return minCount;
    }
  }
  
  // Instantiate the solution with the simulated API
  let solution = new Solution(simulatedAPI);
  
  // UI Functions
  
  // Tab navigation function
  function showTab(tabId) {
    document.querySelectorAll(".tab-content").forEach(tab => {
      tab.classList.add("hidden");
      tab.classList.remove("active");
    });
    document.getElementById(tabId).classList.remove("hidden");
    document.getElementById(tabId).classList.add("active");
  }
  
  // --- Smallest Unreachable Tab Functions ---
  function setDenominations() {
    let input = document.getElementById("denominations-input").value;
    let arr = input.split(",").map(x => parseInt(x.trim())).filter(x => !isNaN(x) && x > 0);
    simulatedAPI.denominations = arr;
    document.getElementById("denominations-display").innerText = "Denominations: " + arr.join(", ");
  }
  
  function generateRandomDenominationsUI() {
    let randomDenoms = generateRandomDenoms(6, 50);
    simulatedAPI.denominations = randomDenoms;
    document.getElementById("denominations-display").innerText = "Denominations: " + randomDenoms.join(", ");
  }
  
  function runSmallestUnreachable() {
    let result = solution.smallestUnreachable();
    document.getElementById("result-unreachable").innerText = "Smallest Unreachable Amount: " + result;
  }
  
  // --- Minimum Bills Tab Functions ---
  function setDenominationsMin() {
    let input = document.getElementById("denominations-min-input").value;
    let arr = input.split(",").map(x => parseInt(x.trim())).filter(x => !isNaN(x) && x > 0);
    simulatedAPI.denominations = arr;
    document.getElementById("denominations-min-display").innerText = "Denominations: " + arr.join(", ");
  }
  
  function generateRandomDenominationsMin() {
    let randomDenoms = generateRandomDenoms(6, 500);
    simulatedAPI.denominations = randomDenoms;
    document.getElementById("denominations-min-display").innerText = "Denominations: " + randomDenoms.join(", ");
  }
  
  function setPriceAndPayment() {
    let priceInput = parseInt(document.getElementById("price-input").value);
    let paymentInput = parseInt(document.getElementById("payment-input").value);
    if (isNaN(priceInput) || isNaN(paymentInput)) {
      alert("Please enter valid numbers for price and payment.");
      return;
    }
    if (paymentInput < priceInput) {
      alert("Payment must be greater than or equal to price.");
      return;
    }
    simulatedAPI.price = priceInput;
    simulatedAPI.payment = paymentInput;
    document.getElementById("price-payment-display").innerText = "Price: " + priceInput + ", Payment: " + paymentInput;
  }
  
  function generateRandomPricePaymentUI() {
    let result = generateRandomPricePaymentHelper(1000);
    simulatedAPI.price = result.price;
    simulatedAPI.payment = result.payment;
    document.getElementById("price-payment-display").innerText = "Price: " + result.price + ", Payment: " + result.payment;
  }
  
  function runMinBills() {
    let result = solution.minBills();
    document.getElementById("result-min-bills").innerText = "Minimum Bills Required: " + result;
  }
  