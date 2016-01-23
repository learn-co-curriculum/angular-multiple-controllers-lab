# Multiple Controllers

## Objectives

- Write a new Controller
- Nest the second Controller inside the other in the View
- Access inherited properties from the parent Controller
- Update a parent Controller from the child Controller

## Instructions

Copy the directory structure from this repo.

Create the controller `ContactController` inside `js/app/controllers/ContactController.js`. Create the values `name`, `email` and `phone` inside the controller. Create a function to update the name to a different value - e.g.

```js
function ContactController() {
  var vm = this;
  
  this.changeName = function () {
    vm.name = 'Something else!'
  }
}
```

We create the variable `vm` to keep a reference to the `this` object. That way, inside functions, we don't have to care what the `this` keyword is - we can update our `vm` variable instead. 

Initialise this controller in our HTML using `ng-controller`. Make sure you use the controllerAs syntax, assigning the controller to the variable `contact`. Inside this element, display the contact's name, email and phone number.

Create another controller named `StaffController` inside `js/app/controllers/ContactController.js`.  Create the values `name`, `email` and `phone` inside the controller. 

Initialise `StaffController` inside the HTML element for our ContactController. Inside this, display the staff's name, email and phone number. Then, create a button with the attribute `ng-click="contact.changeName"`. This should, when clicked, update our `ContactController`'s `name` value.  