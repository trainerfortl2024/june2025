# Lab - Building a Functional Product Manager in JavaScript
## Objectives
* Understand and apply functional programming concepts such as pure functions, immutability, and higher-order functions.  
* Use JavaScript’s map, filter, and reduce functions to manipulate an array of product objects.  
* Create and test functions that follow functional programming principles.  

## Steps
### Step1 - Create an array of products
* Create a new JavaScript file (productManager.js).  
* Define an array of product objects with properties: name and price.  
* Hint :  Each product should look like this
```js
 { name: 'ProductName', price: 100 }
```

### Step 2: Create a pure function to apply a discount
* Write a function called applyDiscount that takes two parameters: product (an object) and discount (a percentage).  
* This function should return a new product with the discounted price, without modifying the original object.  

* Hint: Use the ... (spread operator) to create a copy of the product object.  

### Step 3: Apply discount to all products (higher-order function)
* Use JavaScript’s map() function to apply a 10% discount to all products in the array.  
* Store the new array of discounted products in a variable discountedProducts.  

### Step 4: Filter products by price
* Write a function filterByPrice that takes an array of products and a maxPrice.  
* Use filter() to return only products that have a price equal to or below maxPrice.  
* Hint: filter() is a higher-order function that takes a function as an argument.  

### Step 5: Calculate total price (optional)
* Write a pure function calculateTotal that uses reduce() to sum up all product prices in the array.  
* Return the total price for the list of discounted products.  
