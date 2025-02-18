# Currency Denomination Challenge

This project is a web-based user interface for a coding challenge solution related to currency exchange problems. It provides two interactive tabs that let users explore two distinct challenges:

- **Smallest Unreachable:** Determine the smallest amount that cannot be achieved using at most one bill of each denomination.
- **Minimum Bills:** Calculate the minimum number of bills needed to provide exact change given a price and a payment. This solution employs a recursive algorithm with memoization to handle arbitrary denominations.

## Features

- **Navigation Tabs:**  
  - **Smallest Unreachable:** Users can manually enter or randomly generate bill denominations, then calculate the smallest unreachable amount.
  - **Minimum Bills:** Users can manually enter or randomly generate denominations, price, and payment values, then compute the minimum number of bills needed for exact change.
  
- **User Input & Random Generation:**  
  - Input fields allow custom entries.
  - Buttons provide random generation of denominations, price, and payment.

- **Responsive Design:**  
  - Built with HTML, CSS, and JavaScript, the UI is fully responsive for both desktop and mobile devices.
  
- **Optimized Algorithms:**  
  - Uses a greedy approach for calculating the smallest unreachable amount.
  - Implements a recursive solution with memoization for determining the minimum number of bills.

- **Simulated API:**  
  - A simulated API mimics real API calls to retrieve bill denominations, price, and payment values, seamlessly integrating with the challenge logic.

## How to Use

1. **Clone the Repository**
   ```bash
   git clone https://github.com/thejessicafelts/currency-denomination-challenge.git
   cd currency-denomination-challenge
   ```

2. **Open the Project**

   - Open `index.html` in your preferred web browser (no server setup required).

3. **Using the Smallest Unreachable Tab**

   - **Manual Input:**
     - Enter a comma-separated list of bill denominations (e.g., `1,2,5`) into the provided input field.
     - Click "Set Denominations" to update the list.
   - **Random Generation:**
     - Click "Randomly Generate Denominations" to auto-populate the field.
   - Click "Find Smallest Unreachable" to calculate and display the result.

4. **Using the Minimum Bills Tab**

   - **Manual Input:**
     - Enter a comma-separated list of bill denominations (e.g., `1,5,10`) in the input field.
     - Enter a price and payment value in the respective fields.
     - Click "Set Denominations" and "Set Price & Payment" to update the values.
   - **Random Generation:**
     - Click "Randomly Generate Denominations" and "Randomly Generate Price & Payment" to auto-fill the fields.
   - Click "Calculate Minimum Bills" to compute and display the minimum number of bills required for the exact change.
     - The program returns `-1` if exact change is not possible, and `0` if no change is required.

## Technical Details

### Smallest Unreachable Calculation

Smallest Unreachable Calculation uses a greedy algorithm that:
1. Sorts the denominations in ascending order.
2. Iteratively adds each bill’s value to the range of reachable sums.
3. Returns the first gap where the current denomination exceeds the running total.

### Minimum Bills Calculation

Minimum Bills Calculation uses a recursive algorithm with memoization that:
1. Calculates the change (payment minus price).
2. Returns `-1` if payment is less than price or `0` if no change is needed.
3. Recursively computes the minimum number of bills required while optimizing repeated subproblems via memoization.
4. Returns the minimum number of bills or `-1` if exact change cannot be made.

## Acknowledgements

This project was developed as part of a coding challenge to showcase proficiency in JavaScript, HTML, CSS, and algorithmic problem solving. Special thanks to all mentors and peers for their invaluable feedback during development.
