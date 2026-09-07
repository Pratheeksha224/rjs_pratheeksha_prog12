# React Shopping Cart – `.map()` and `useState()`

## Practical Assignment

### Title

**Develop a Shopping Cart using React, `.map()` and `useState()`**

### Objective

Develop a React application that displays a list of products in a shopping cart.

The application should use:

* React
* `useState()` Hook
* `.map()` method
* Event handling
* Array manipulation
* Dynamic calculation of total amount

---

## Problem Statement

Create a **React Shopping Cart application** with the following features:

1. Store the shopping cart products using the `useState()` Hook.
2. Display all products using the `.map()` method.
3. Display the following details for each product:

   * Product Name
   * Price
   * Quantity
4. Provide a **+ button** to increase the quantity.
5. Provide a **− button** to decrease the quantity.
6. Calculate and display the total cart amount dynamically.
7. Use a unique `key` value while displaying products using `.map()`.

---

## Initial Product Details

The application should initially contain the following products:

| Product    |   Price | Quantity |
| ---------- | ------: | -------: |
| Laptop     | ₹50,000 |        1 |
| Headphones |  ₹2,000 |        1 |
| Mouse      |    ₹800 |        1 |

### Initial Total

```text
₹52,800
```

---

## Expected Output

The application should display something similar to:

```text
Shopping Cart

Laptop
Price: ₹50000
Quantity: 1

[-] [+]

Headphones
Price: ₹2000
Quantity: 1

[-] [+]

Mouse
Price: ₹800
Quantity: 1

[-] [+]

Total: ₹52800
```

---

## Expected Behaviour

### 1. Display Products

When the application is opened, all three products should be displayed.

```text
Laptop
Headphones
Mouse
```

### 2. Increase Quantity

When the `+` button for Laptop is clicked:

```text
Laptop
Quantity: 2
```

The total should become:

```text
₹102800
```

### 3. Decrease Quantity

When the `−` button is clicked, the quantity should decrease.

The total amount should also be updated automatically.

### 4. Dynamic Total

The total should change whenever the quantity of a product changes.

---

# React Concepts to Use

## 1. `useState()`

Use the `useState()` Hook to store the cart data.

Example:

```javascript
const [cart, setCart] = useState([
  {
    id: 1,
    name: "Laptop",
    price: 50000,
    quantity: 1
  }
]);
```

---

## 2. `.map()`

Use `.map()` to display each product.

Example:

```javascript
cart.map((item) => (
  <div key={item.id}>
    <h2>{item.name}</h2>
    <p>Price: ₹{item.price}</p>
  </div>
))
```

---

## 3. Event Handling

Use button click events to modify the quantity.

Example:

```javascript
<button onClick={increaseQuantity}>
  +
</button>
```

---

# Project Folder Structure

The repository should have the following structure:

```text
react-shopping-cart/
│
├── public/
│   └── index.html
│
├── src/
│   ├── App.js
│   ├── App.test.js
│   └── index.js
│
├── .github/
│   └── workflows/
│       └── autograding.yml
│
├── package.json
└── README.md
```

### Important Files

| File                                | Purpose                             |
| ----------------------------------- | ----------------------------------- |
| `src/App.js`                        | Main React application              |
| `src/App.test.js`                   | Automated test cases                |
| `src/index.js`                      | React application entry point       |
| `public/index.html`                 | HTML page containing the React root |
| `package.json`                      | Project dependencies and scripts    |
| `.github/workflows/autograding.yml` | GitHub Actions automated testing    |
| `README.md`                         | Assignment instructions             |

---

# How to Run the Program

## Step 1: Clone the Repository

Clone your GitHub Classroom repository.

```bash
git clone YOUR_REPOSITORY_URL
```

Move into the project folder:

```bash
cd react-shopping-cart
```

---

## Step 2: Install Dependencies

Open the terminal in the project folder and run:

```bash
npm install
```

This installs all required React packages.

---

## Step 3: Start the React Application

Run:

```bash
npm start
```

The application will start in the browser.

Usually it will open at:

```text
http://localhost:3000
```

If the browser does not open automatically, open the address manually.

---

# How to Stop the Application

In the terminal, press:

```text
Ctrl + C
```

---

# How to Run Automated Tests

The project contains automated test cases in:

```text
src/App.test.js
```

Run the tests using:

```bash
npm test
```

The tests check whether the application satisfies the required functionality.

For example:

```text
✓ displays the shopping cart heading
✓ displays all products
✓ displays initial total
✓ increases laptop quantity
✓ decreases quantity
```

---

# GitHub Actions Autograding

This assignment uses **GitHub Actions** for automated testing.

The workflow file is located at:

```text
.github/workflows/autograding.yml
```

Whenever you push your code to GitHub, GitHub Actions will automatically run the tests.

The process is:

```text
Write Program
     ↓
Test Locally
     ↓
git add .
     ↓
git commit
     ↓
git push
     ↓
GitHub Actions
     ↓
Automated Tests
     ↓
PASS / FAIL
```

---

# How to Submit

After completing the program, save your changes and run:

```bash
git add .
```

Then:

```bash
git commit -m "Completed Shopping Cart practical"
```

Finally:

```bash
git push
```

Your GitHub Classroom repository will then contain your completed assignment.

---

# Important Submission Requirements

Before submitting, make sure that:

* [ ] `App.js` contains the React Shopping Cart.
* [ ] `useState()` is used.
* [ ] `.map()` is used to display products.
* [ ] Product name is displayed.
* [ ] Product price is displayed.
* [ ] Product quantity is displayed.
* [ ] `+` button increases quantity.
* [ ] `−` button decreases quantity.
* [ ] Total amount is calculated dynamically.
* [ ] Each mapped product has a unique `key`.
* [ ] The application runs without errors.
* [ ] All automated tests pass.
* [ ] The latest code is pushed to GitHub.

---

# Testing Checklist

Before pushing your code, test the following manually:

### Test 1 – Product Display

Check whether these products are displayed:

```text
Laptop
Headphones
Mouse
```

### Test 2 – Initial Quantity

Check whether every product initially has:

```text
Quantity: 1
```

### Test 3 – Initial Total

The initial total should be:

```text
₹52800
```

### Test 4 – Increase Quantity

Click `+` for Laptop.

Expected:

```text
Laptop Quantity: 2
Total: ₹102800
```

### Test 5 – Decrease Quantity

Click `−` for Laptop.

The quantity and total should be updated.

### Test 6 – Multiple Products

Increase the quantity of more than one product and verify that the total is updated correctly.

---

# Marks Distribution

| Criteria                        |        Marks |
| ------------------------------- | -----------: |
| Correct use of `useState()`     |            1 |
| Display products using `.map()` |            2 |
| Display product name and price  |            1 |
| Display quantity                |            1 |
| Increase quantity               |            2 |
| Decrease quantity               |            1 |
| Dynamic total calculation       |            2 |
| **Total**                       | **10 Marks** |

---

# Important Instructions

1. Do not remove the existing project structure.
2. Do not change the automated test files.
3. Do not remove the GitHub Actions workflow.
4. Complete the implementation in `src/App.js`.
5. Use React and the `useState()` Hook.
6. Use `.map()` to display the products.
7. Test your application before submitting.
8. Push the final working program to your GitHub Classroom repository.

---

# Useful Commands

### Install dependencies

```bash
npm install
```

### Start application

```bash
npm start
```

### Run tests

```bash
npm test
```

### Build application

```bash
npm run build
```

### Check Git status

```bash
git status
```

### Add changes

```bash
git add .
```

### Commit changes

```bash
git commit -m "Completed practical"
```

### Push changes

```bash
git push
```

---

## Learning Outcome

After completing this practical, students should be able to:

* Create a React application.
* Use the `useState()` Hook.
* Store and update array-based state.
* Use `.map()` to render multiple elements.
* Handle button click events.
* Update UI dynamically based on state.
* Implement a simple real-world shopping cart.
* Use GitHub and GitHub Actions for automated testing.
